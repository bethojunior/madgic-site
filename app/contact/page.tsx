'use client';

import React, { ChangeEvent, useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); 
    if (value.length > 2 && value.length <= 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6, 11)}`;
    }
    setPhoneNumber(value);
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send('service_isho01b', 'template_z5idhcu', {
      from_name: name,
      reply_to: email,
      message: message,
      phone: phoneNumber,
    }, 'CMz6eVs7v5mudTXp1')
      .then((result) => {
        console.log(result.text);
        alert('Mensagem enviada com sucesso!');
      }, (error) => {
        console.log(error.text);
        alert('Erro ao enviar mensagem.');
      });
  };

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:justify-between pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="md:w-1/2 max-w-3xl mx-auto text-center pb-12 md:pb-0 md:text-left">
            <h1 className="h1 mb-6">Fale conosco hoje mesmo</h1>
            <p className="text-lg text-gray-600 mb-6">Nosso time está disponível para atender sua demanda e entender qual a melhor solução tecnológica para o seu negócio</p>
            <h2 className="text-lg font-bold">Madgic Soluções de Tecnologia</h2>
            <h2 className="mb-8">Fortaleza, Ceará - Brasil</h2>
          </div>

          <div className="md:w-1/2 max-w-sm mx-auto">
            <form onSubmit={sendEmail}>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Nome</label>
                  <input id="name" type="text" className="form-input w-full text-gray-800" placeholder="Seu nome completo" required onChange={handleNameChange} />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email</label>
                  <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Seu email" required onChange={handleEmailChange} />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="telefone">Telefone</label>
                  <input
                    id="telefone"
                    type="tel"
                    className="form-input w-full text-gray-800"
                    placeholder="(XX) XXXXX-XXXX"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    pattern="\(\d{2}\) \d{5}-\d{4}"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="message">Mensagem</label>
                  <textarea
                    id="message"
                    className="form-textarea w-full text-gray-800"
                    placeholder="Digite sua mensagem aqui"
                    rows={4}
                    value={message}
                    onChange={handleMessageChange}
                    required
                  ></textarea>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn-sm text-gray-200 bg-[#7163FF] hover:bg-[#6152de] rounded-md w-full">Enviar mensagem</button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
