import React, { useState } from "react";

function FAQDropDown() {
  const [dropdownOptions, setDropdownOptions] = useState([
    {
      question: "What types of pottery do you offer?",
      answer:
        "We specialize in minimalist and modern pottery, offering a wide range of handcrafted pieces such as bowls, mugs, vases, and decorative items. Each piece is designed to bring simplicity and elegance into your space, with a focus on clean lines and natural finishes.",
      state: false,
    },
    {
      question: "Can I place custom orders?",
      answer:
        "Yes, we accept custom orders! If you have a specific design or idea in mind, please contact us, and we'll work with you to create a unique, handcrafted piece that fits your vision. Custom orders typically take 2-3 weeks to complete.",
      state: false,
    },
    {
      question: "What should I expect during a workshop?",
      answer:
        "Our workshops provide a hands-on experience where you’ll learn the basics of pottery making, from shaping clay to glazing. All materials and tools are provided, and you’ll leave with your very own handcrafted piece. Workshops typically last between 2-3 hours.",
      state: false,
    },
    {
      question: "Are the ceramics dishwasher and microwave safe?",
      answer:
        "Yes, our pottery is made from durable, high-quality materials and is both dishwasher and microwave safe. However, we recommend handwashing your pieces to maintain their finish and prolong their life.",
      state: false,
    },
  ]);

  const toggleDropdown = (index) => {
    const updatedOptions = dropdownOptions.map((item, i) => {
      if (i === index) {
        return { ...item, state: !item.state };
      }
      return item;
    });
    setDropdownOptions(updatedOptions);
  };

  return (
    <ul className="max-w-5xl">
      {dropdownOptions.map((item, index) => (
        <li
          key={index}
          className="max-w-lg px-4 py-4 border-2 border-gray-dark rounded-md lg:mb-4 md:mb-4 mb-2 shadow-sm bg-gray-rustic"
        >
          <div className="flex justify-between items-center">
            <label id="question" className="font-medium text-lg">
              {item.question}
            </label>
            <button
              onClick={() => toggleDropdown(index)}
              className="focus:outline-none text-lg font-bold"
              aria-expanded={item.state}
            >
              {item.state ? "-" : "+"}
            </button>
          </div>
          {item.state && (
            <div className="text-gray-900 border-t-2 border-t-gray-dark pt-4 mt-2">
              {item.answer}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default FAQDropDown;
