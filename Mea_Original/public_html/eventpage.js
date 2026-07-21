const eventDetailsData = {
  designContest: {
      title: "Mechanical Maverick",
      description: "COMING SOON",
      date: "February 3, 2025",
      location: "Design Lab 1, Mechanical Block",
      image: "event/mech-maverick.jpg",
       // Add image URL
  },
  workshop: {
      title: "Makers Mystery",
      description: "The Mechanical Engineering Association (CIT) successfully organized the Makers Mystery event for first-year students on the 25th of November 2024. The event aimed to engage students in fun, hands-on engineering challenges that promoted teamwork, creativity, and technical skills.",
      date: "25/11/2024",
      location: "LBCH",
      image: "event/maker-mystery.jpg",
      documentLink: "docs/Makers Mystery.pdf", // Add image URL
  },
  robotics: {
      title: "Treasure Hunt",
      description: "The Mechanical Engineering Association (CIT) successfully organized a Treasure Hunt event for first-year students on the 18th of November 2024. The primary objective of this event was to introduce students to laboratory equipment and processes in an engaging and interactive manner.",
      date: "18/11/2024",
      location: "Various Laboratories in the Mechanical Engineering Department",
      image: "event/treasure-hunt.jpg", 
      documentLink: "docs/Treasure Hunt.pdf",// Add image URL
  },
  thermalSeminar: {
      title: "Science Expo",
      description: "The Mechanical Engineering Association (CIT) organized a Science Expo event for first-year students on the 28th of October 2024. The event aimed to provide a platform for students to showcase their creativity and innovation through small projects and prototypes.",
      date: "28/10/2024",
      location: "LBCH",
      image: "event/science-expo.jpg",
      documentLink: "docs/Science Expo.pdf", // Add image URL
  },
  industryVisit: {
      title: "Inauguration MEA 2k24",
      description: "",
      date: "21/10/2024",
      location: "Seminar Hall",
      image: "event/mea_.jpg", // Add image URL
  },
};


function showEventDetails(eventKey) {
  const modal = document.getElementById("eventModal");
  const eventDetails = eventDetailsData[eventKey];

  // Add a document button if a link exists
  const documentButton = eventDetails.documentLink 
    ? `<a href="${eventDetails.documentLink}" target="_blank" style="display:inline-block; margin-top:20px; padding:10px 20px; background-color:red; color:black; text-decoration:none; border-radius:5px;">View Document</a>`
    : "";

  // Dynamically set the event details, including the image and button
  document.getElementById("eventDetails").innerHTML = `
    <img src="${eventDetails.image}" alt="${eventDetails.title}" style="width:100%; height:auto; margin-bottom:20px; border-radius:10px;">
    <h2>${eventDetails.title}</h2>
    <p><strong>Date:</strong> ${eventDetails.date}</p>
    <p><strong>Location:</strong> ${eventDetails.location}</p>
    <p>${eventDetails.description}</p>
    ${documentButton}
  `;

  // Display the modal
  modal.style.display = "block";
}


// Close modal function
function closeEventDetails() {
  document.getElementById("eventModal").style.display = "none";
}
