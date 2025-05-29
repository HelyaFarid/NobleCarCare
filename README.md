# Noble Car Care

Noble Car Care is a modern, mobile car wash and detailing service website. The site allows users to learn about our services, view transformations, read testimonials, and contact us directly through a simple form.

## Features

- **Responsive Design:** Works on desktop and mobile devices.
- **Service Listings:** Details about exterior, interior, and ceramic coating services.
- **Image Comparisons:** Before-and-after images of real client vehicles.
- **Testimonials:** Customer reviews and experiences.
- **Contact Form:** Users can send messages directly to Noble Car Care (emails sent via a secure Node.js backend with Nodemailer).

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript, jQuery
- **Backend:** Node.js, Express, Nodemailer
- **Deployment:** [Render.com](https://render.com) (for backend)

## How to Use

1. **Clone the repository:**
   ```bash
   git clone https://github.com/HelyaFarid/NobleCarCare
   cd noble-car-care
   ```

2. **Install backend dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory:
     ```
     SMTP_USER=your-email@example.com
     SMTP_PASS=your-email-password
     ```
   - **Never commit your `.env` file!**

4. **Run the backend server:**
   ```bash
   node server.js
   ```
   The backend will run on `http://localhost:10000` (or as configured).

5. **Open `index.html` in your browser** to view the site locally.

## Contact

For questions or feedback, please use GitHub Issues to send me a message.

---

**Note:**  
This project is for demonstration. Please do not include real SMTP credentials in any public repository.
