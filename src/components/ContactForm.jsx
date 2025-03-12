export default function ContactForm() {
  return (
    <>
      <form id="contact-form">
        <label for="name">Hi Joshua, my name is </label>
        <input type="text" class="form-field" name="name" placeholder="Your Name" />
        <label for="subject">and I am looking for help with </label>
        <select class="form-field" name="subject">
          <option value="website">my website</option>
          <option value="app">building an app</option>
          <option value="collab">a collaboration</option>
          <option value="hi">just sayin' hi!</option>
        </select>
        <label for="email"> You can reach me at </label>
        <input type="text" class="form-field" name="email" placeholder="Your Email" />
      </form>
    </>
  );
}
