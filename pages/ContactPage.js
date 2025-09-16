// pages/ContactPage.js
class ContactPage {
    constructor(page) {
        this.page = page;
        this.contactButton = 'a[data-target="#exampleModal"]'; // Opens the contact modal
        this.nameInput = '#recipient-name';
        this.emailInput = '#recipient-email';
        this.messageInput = '#message-text';
        this.sendButton = 'button:has-text("Send message")';
    }

    async goto() {
        await this.page.goto('https://demoblaze.com/');
    }

    async openContactModal() {
        await this.page.click(this.contactButton);
    }

    async fillForm(name, email, message) {
        await this.page.fill(this.nameInput, name);
        await this.page.fill(this.emailInput, email);
        await this.page.fill(this.messageInput, message);
    }

    async submitForm() {
        await this.page.click(this.sendButton);
    }
}

module.exports = ContactPage;
