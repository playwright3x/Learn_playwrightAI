import { expect, test } from "@playwright/test";


test.describe('Student Login — Assertion Practice', () => {

});

test.beforeEach("Student Login ", async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

});

test("Assertion - Student Login", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    await expect(page).toHaveURL(
        "https://app.thetestingacademy.com/playwright/multiple_element_filter"
    );

    // Heading Assertions

    await expect(page.getByRole('heading', { name: "Student Login" })).toBeVisible();

    await expect(page.getByRole('heading', { name: "Student Login" })).toHaveText("Student Login");

    await expect(page.getByText('Practice page for Playwright selectors')).toBeVisible();

    const heading = page.getByText('multiple element filters', { exact: true });
    await expect(heading).toBeVisible();
    await expect(heading).toContainText('filter', { timeout: 10000 });


    // 4. Secure Practice Badge Assertions 

    const badge = page.getByText('Secure Practice');

    // Verify badge is visible
    expect(badge).toBeVisible();
    // Verify partial text
    expect(badge).toContainText("Practice");
    // Verify exact text
    expect(badge).toHaveText("Secure Practice");

    await expect(page.getByText("Email Address", { exact: true })).toBeVisible();
    const email = page.getByRole("textbox", { name: "Email Address" });

    expect(email).toBeVisible();
    expect(email).toBeEditable();
    expect(email).toBeEnabled();
    await email.fill("sahshank.pandit774@gmail.com");
    expect(email).toHaveValue("sahshank.pandit774@gmail.com");
    await expect(email).toHaveAttribute('type', 'email');
    expect(email).toHaveAttribute('placeholder', "student@thetestingacademy.com");


    await expect(page.getByText("Password", { exact: true })).toBeVisible();
    const password = page.getByRole("textbox", { name: "Password" });

    expect(password).toBeVisible();
    expect(password).toBeEditable();
    expect(password).toBeEnabled();

    await password.fill("Kartik@123.");
    await expect(password).toHaveValue("Kartik@123.");
    await expect(password).toHaveAttribute('type', 'password');
    await expect(password).toHaveAttribute('placeholder', "Enter your password");

    const checkbx = page.getByRole('checkbox', { name: "remember" });

    await expect(checkbx).toBeVisible();
    await expect(checkbx).not.toBeChecked();
    await checkbx.check();
    await expect(checkbx).toBeChecked();
    await checkbx.uncheck();
    await expect(checkbx).not.toBeChecked();

    const forgetPassword = page.getByRole("link", { name: "Forget password?" });
    await expect(forgetPassword).toBeVisible();
    await expect(forgetPassword).toHaveText("Forget password?")
    await expect(forgetPassword).toContainText("Forget");
    await expect(forgetPassword).toHaveAttribute("href", "#forgotten-password");

    const loginButton = page.getByRole("button", { name: "Login to Practice Account" })

    await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeEnabled();
    await expect(loginButton).toHaveText("Login to Practice Account");
    await expect(loginButton).not.toBeDisabled();


    const githubLink = page.getByRole("link", { name: "Continue with GitHub" });
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toBeEnabled();
    await expect(githubLink).toContainText("GitHub");
    await expect(githubLink).toHaveAttribute("href", "#github-login");
    const google = page.getByRole('link', { name: "Continue with Google" });


    await expect(google).toBeVisible();

    await expect(google).toBeEnabled();

    await expect(google).toContainText('Google');
    await expect(google).toHaveAttribute("href", "#google-login");


    await expect(page.getByRole("textbox")).toHaveCount(2);
    await expect(page.getByRole("button")).toHaveCount(15);
    await expect(page.getByRole("checkbox")).toHaveCount(1);
    await expect(page.getByRole("link")).toHaveCount(102);


    const account_link = page.locator("a.list-group-item");
    console.log(await account_link.count())
    await expect(account_link).toHaveCount(13);
    console.log(await account_link.allInnerTexts())

    await expect(page.locator("a.list-group-item")).toHaveText([
        'Login',
        'Register',
        'Forgotten Password',
        'My Account',
        'Address Book',
        'Wish List',
        'Order History',
        'Downloads',
        'Recurring Payments',
        'Reward Points',
        'Returns',
        'Transactions',
        'Newsletter'
    ]);

    await expect(
        page.locator("a.list-group-item")
            .filter({
                hasText: 'Order History'
            })
    ).toHaveText('Order History');

    // soft Assertions 

    await expect.soft(page.getByRole("heading", { name: "Student Login" })).toBeVisible();
    await expect(email).toBeEditable();
    await expect(email).toBeEnabled();

    // Hard assertion
    await expect(loginButton).toBeVisible();

    // This executes only if the assertion passes
    await expect(loginButton).toBeEnabled();



    //footer 
   const footerLinks = page.locator("#footer-links a");
   await expect(footerLinks).toHaveCount(16);


    await page.pause();
});