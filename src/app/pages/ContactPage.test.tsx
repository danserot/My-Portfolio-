import { afterEach, expect, jest, test } from "@jest/globals";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { LanguageProvider } from "../i18n/context";
import ContactPage from "./ContactPage";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}), { virtual: true });
jest.mock("@chakra-ui/react", () => ({
  Box: ({ children, role, asChild }: { children: React.ReactNode; role?: string; asChild?: boolean }) =>
    asChild ? children : <div role={role}>{children}</div>,
  Button: ({ children, type, disabled }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button type={type} disabled={disabled}>{children}</button>
  ),
  Flex: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Heading: ({ children }: { children: React.ReactNode }) => <h1>{children}</h1>,
  Input: ({ id, name, type, required, autoComplete }: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input id={id} name={name} type={type} required={required} autoComplete={autoComplete} />
  ),
  Text: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Textarea: ({ id, name, required }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
    <textarea id={id} name={name} required={required} />
  ),
}));
jest.mock("../components/PageShell", () => ({ children }: { children: React.ReactNode }) => <div>{children}</div>);
jest.mock("../components/Reveal", () => ({ children }: { children: React.ReactNode }) => <div>{children}</div>);
jest.mock("../components/Seo", () => () => null);

const originalFetch = globalThis.fetch;

function renderContactPage() {
  render(
    <LanguageProvider>
      <ContactPage />
    </LanguageProvider>,
  );
}

function fillRequiredFields() {
  fireEvent.change(screen.getByLabelText("Your name"), { target: { value: "Test User" } });
  fireEvent.change(screen.getByLabelText("Email"), { target: { value: "test@example.com" } });
  fireEvent.change(screen.getByLabelText("Project details"), { target: { value: "Test message" } });
}

afterEach(() => {
  globalThis.fetch = originalFetch;
  mockNavigate.mockReset();
});

test("submits the Netlify form and opens the success route", async () => {
  globalThis.fetch = jest.fn(async () => ({ ok: true } as Response)) as typeof fetch;
  renderContactPage();
  fillRequiredFields();

  fireEvent.click(screen.getByRole("button", { name: "Send message" }));

  await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith("/thanks"));
  expect(globalThis.fetch).toHaveBeenCalledWith(
    "/",
    expect.objectContaining({
      method: "POST",
      body: expect.stringContaining("form-name=contact"),
    }),
  );
});

test("shows an inline fallback when Netlify rejects the request", async () => {
  const consoleError = jest.spyOn(console, "error").mockImplementation(() => undefined);
  globalThis.fetch = jest.fn(async () => ({ ok: false, status: 404 } as Response)) as typeof fetch;
  renderContactPage();
  fillRequiredFields();

  fireEvent.click(screen.getByRole("button", { name: "Send message" }));

  expect((await screen.findByRole("alert")).textContent).toContain("The form could not be sent");
  expect(screen.getByRole("link", { name: "tema324756@gmail.com" }).getAttribute("href")).toBe(
    "mailto:tema324756@gmail.com",
  );
  consoleError.mockRestore();
});
