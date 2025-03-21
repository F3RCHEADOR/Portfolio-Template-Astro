import { useState } from "react";

const ContactForm = () => {
  const [clicked, setClicked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setClicked(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviando");

    setFormSubmitted(true);
  };

  return (
    <section className="relative w-full sm:h-[90dvh] p-2 gap-2 bg-main-light dark:bg-main-dark transform transition-all sm:mb-4">
      <div id="contact" className="text-center">
        {formSubmitted ? (
          <div className="flex flex-row items-center justify-center space-x-2.5 shadow-md hover:shadow-lg shadow-teal-300 dark:shadow-gray-600 hover:scale-105 transition-all absolute top-1/2 right-1/2 transform -translate-y-1/2 translate-x-1/2 h-auto px-6 py-4">
            <img src="correo-electronico.png" alt="#" className="size-32" />
            <h1 className="[text-shadow:_0_3px_2px_rgb(99_200_241_/_0.6)] dark:[text-shadow:_0_3px_2px_rgb(99_102_241_/_0.6)] font-bold italic text-heading-alt-light dark:text-heading-alt-dark text-2xl">
              Mensaje Enviado
            </h1>
          </div>
        ) : (
          <div>
            <div className="ml-48 relative h-23 mb-8 mt-4">
              <img
                src="burbuja-de-chat.png"
                alt="#"
                className="size-20 absolute -top-0.5 right-1/2 transform -translate-x-3/5 z-50 hover:opacity-70 transition-all"
              />
              <h1 className="absolute -bottom-4 right-1/2 transform text-center z-40 -translate-x-1/4 text-4xl font-bold italic dark:text-headingg-main-dark">
                Contacto
              </h1>
            </div>

            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="space-y-8 w-full max-w-screen-lg mx-auto rounded-xl p-6 shadow-sm shadow-teal-200 dark:shadow-gray-600 bg-white dark:bg-main-dark transition-all hover:shadow-lg mb-4 overflow-auto"
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold text-paragraph-light dark:text-paragraph-dark mb-2"
                >
                  Nombre Completo / Empresa
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 block w-full px-6 py-3 border hover:border-4 focus:border-button-main-light dark:focus:border-button-main-dark rounded-md shadow-lg transition-all hover:scale-105 dark:text-white dark:bg-gray-600"
                  placeholder="Harry Potter / Howards"
                  required
                />
              </div>

              {/* Email and Subject Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 md:gap-x-8 mb-6">
                <div className="mb-6 sm:mb-0">
                  <label
                    htmlFor="email"
                    className="block text-lg font-semibold text-paragraph-light dark:text-paragraph-dark mb-2"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 block w-full px-6 py-3 border hover:border-4 focus:border-button-main-light dark:focus:border-button-main-dark rounded-md shadow-lg transition-all hover:scale-105 dark:text-white dark:bg-gray-600"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-lg font-semibold text-paragraph-light dark:text-paragraph-dark mb-2"
                  >
                    Asunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-2 block w-full px-6 py-3 border hover:border-4 focus:border-button-main-light dark:focus:border-button-main-dark rounded-md shadow-lg transition-all hover:scale-105 dark:text-white dark:bg-gray-600"
                  >
                    <option value="feedback">Feedback</option>
                    <option value="inquiry">Oferta</option>
                    <option value="support">Soporte</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-lg font-semibold text-paragraph-light dark:text-paragraph-dark mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 block w-full px-6 py-3 border hover:border-4 focus:border-button-main-light dark:focus:border-button-main-dark rounded-md shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark hover:scale-105 dark:text-white dark:bg-gray-600"
                  placeholder="Tu Mensaje"
                  rows="4"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-button-main-light dark:bg-button-main-dark text-white py-4 px-8 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-all"
                  disabled={
                    loading ||
                    !formData.name ||
                    !formData.email ||
                    !formData.message
                  } // Deshabilitar si falta algo o está cargando
                >
                  {loading ? "Enviando..." : "Enviar"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
