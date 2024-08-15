'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert('series', [
        // Drama
        { nombre: "Breaking Bad", descripcion: "A high school chemistry teacher turned methamphetamine manufacturer teams up with a former student.", rating: 9.5, imagen: "breaking-bad.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "The Crown", descripcion: "A dramatized account of the reign of Queen Elizabeth II.", rating: 8.7, imagen: "the-crown.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "Mad Men", descripcion: "The lives of 1960s advertising executives as they navigate personal and professional challenges.", rating: 8.7, imagen: "mad-men.jpg", createdAt: new Date(), updatedAt: new Date()},

        // Science-Fiction
        { nombre: "Stranger Things", descripcion: "A group of kids uncover a series of supernatural mysteries in their small town.", rating: 8.7, imagen: "stranger-things.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "The Expanse", descripcion: "A conspiracy threatens peace in a future where humanity has colonized the Solar System.", rating: 8.4, imagen: "the-expanse.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "Black Mirror", descripcion: "An anthology series exploring twisted, high-tech multiverses that showcase the dark side of humanity.", rating: 8.8, imagen: "black-mirror.jpg", createdAt: new Date(), updatedAt: new Date()},

        // Thriller
        { nombre: "Mindhunter", descripcion: "Two FBI agents investigate serial killers to understand how they think.", rating: 8.6, imagen: "mindhunter.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "True Detective", descripcion: "Seasonal anthologies featuring new characters and stories each season, focusing on dark mysteries and crime.", rating: 8.9, imagen: "true-detective.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "Sherlock", descripcion: "A modern update to the classic detective stories of Sherlock Holmes.", rating: 9.1, imagen: "sherlock.jpg", createdAt: new Date(), updatedAt: new Date()},

        // Action
        { nombre: "The Mandalorian", descripcion: "A bounty hunter navigates the outer reaches of the galaxy, set after the fall of the Empire.", rating: 8.8, imagen: "the-mandalorian.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "Vikings", descripcion: "A saga about the legendary Viking chieftain Ragnar Lothbrok and his rise to power.", rating: 8.5, imagen: "vikings.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "24", descripcion: "A counter-terrorism agent races against time to thwart multiple attacks.", rating: 8.3, imagen: "24.jpg", createdAt: new Date(), updatedAt: new Date()},

        // Crime
        { nombre: "Narcos", descripcion: "The rise and fall of drug kingpin Pablo Escobar and the Medellín Cartel.", rating: 8.8, imagen: "narcos.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "Mindhunter", descripcion: "An FBI unit investigates and interviews imprisoned serial killers.", rating: 8.6, imagen: "mindhunter.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "Broadchurch", descripcion: "The investigation of a young boy’s murder reveals dark secrets in a small town.", rating: 8.2, imagen: "broadchurch.jpg", createdAt: new Date(), updatedAt: new Date()},

        // Horror
        { nombre: "The Haunting of Hill House", descripcion: "A family confronts haunting memories of their old home and the events that drove them away.", rating: 8.6, imagen: "the-haunting-of-hill-house.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "American Horror Story", descripcion: "An anthology series exploring various horror themes and storylines.", rating: 8.0, imagen: "american-horror-story.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "Bates Motel", descripcion: "A modern-day prequel to Alfred Hitchcock’s Psycho, focusing on Norman Bates’ teenage years.", rating: 8.1, imagen: "bates-motel.jpg", createdAt: new Date(), updatedAt: new Date()},

        // Romance
        { nombre: "Outlander", descripcion: "A World War II nurse is transported back in time to 18th-century Scotland, where she falls in love.", rating: 8.4, imagen: "outlander.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "Bridgerton", descripcion: "The Bridgerton family navigates London high society and its scandals during the Regency era.", rating: 7.9, imagen: "bridgerton.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "Poldark", descripcion: "A British soldier returns home from the American Revolution to find his life in disarray.", rating: 8.3, imagen: "poldark.jpg", createdAt: new Date(), updatedAt: new Date()},

        // Adventure
        { nombre: "The Witcher", descripcion: "A monster hunter with extraordinary abilities faces dark forces in a fantastical world.", rating: 8.2, imagen: "the-witcher.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "Game of Thrones", descripcion: "Noble families vie for control of the Iron Throne in a world of political intrigue and warfare.", rating: 9.3, imagen: "game-of-thrones.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "Lost", descripcion: "Survivors of a plane crash find themselves on a mysterious island with strange occurrences.", rating: 8.3, imagen: "lost.jpg", createdAt: new Date(), updatedAt: new Date()},

        // Espionage
        { nombre: "Homeland", descripcion: "A CIA officer suspects a U.S. Marine of being an Al-Qaeda sleeper agent.", rating: 8.3, imagen: "homeland.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "The Americans", descripcion: "Two Soviet spies pose as a married couple in the United States during the Cold War.", rating: 8.7, imagen: "the-americans.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "Tinker Tailor Soldier Spy", descripcion: "A Cold War spy thriller following the search for a Soviet mole within British intelligence.", rating: 8.2, imagen: "tinker-tailor-soldier-spy.jpg", createdAt: new Date(), updatedAt: new Date()},

        // Music
        { nombre: "Glee", descripcion: "A high school glee club members navigate personal and social challenges while singing and dancing.", rating: 8.0, imagen: "glee.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "Empire", descripcion: "A hip hop music mogul battles family and rivals while running a record label.", rating: 7.6, imagen: "empire.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "Nashville", descripcion: "Country music stars compete for fame and success in the vibrant Nashville music scene.", rating: 7.7, imagen: "nashville.jpg", createdAt: new Date(), updatedAt: new Date()},

        // Mystery
        { nombre: "The X-Files", descripcion: "FBI agents investigate unsolved and unexplained cases involving paranormal phenomena.", rating: 8.6, imagen: "the-x-files.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "Sherlock", descripcion: "A modern-day detective series based on the Sherlock Holmes stories.", rating: 9.1, imagen: "sherlock.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "True Detective", descripcion: "Each season features new detectives investigating complex cases and uncovering dark secrets.", rating: 8.9, imagen: "true-detective.jpg", createdAt: new Date(), updatedAt: new Date()},

        // Supernatural
        { nombre: "Supernatural", descripcion: "Two brothers hunt demons, ghosts, and monsters while dealing with family and destiny.", rating: 8.4, imagen: "supernatural.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "Buffy the Vampire Slayer", descripcion: "A young woman battles vampires, demons, and other supernatural entities.", rating: 8.2, imagen: "buffy.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "The OA", descripcion: "A blind woman returns after a seven-year disappearance with newfound abilities and a mysterious purpose.", rating: 7.9, imagen: "the-oa.jpg", createdAt: new Date(), updatedAt: new Date()},

        // Fantasy
        { nombre: "The Mandalorian", descripcion: "A lone bounty hunter navigates a lawless galaxy while protecting a mysterious child.", rating: 8.8, imagen: "the-mandalorian.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "Game of Thrones", descripcion: "Noble families vie for control of the Iron Throne in a world of dragons and political intrigue.", rating: 9.3, imagen: "game-of-thrones.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "The Witcher", descripcion: "A monster hunter with extraordinary abilities faces dark forces in a fantastical world.", rating: 8.2, imagen: "the-witcher.jpg", createdAt: new Date(), updatedAt: new Date()},

        // Family
        { nombre: "Full House", descripcion: "A widowed father raises his three daughters with the help of his brother-in-law and best friend.", rating: 7.6, imagen: "full-house.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "Modern Family", descripcion: "The lives of three diverse families are portrayed through a documentary-style lens.", rating: 8.4, imagen: "modern-family.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "The Simpsons", descripcion: "The everyday lives of the Simpson family in the fictional town of Springfield.", rating: 8.6, imagen: "the-simpsons.jpg", createdAt: new Date(), updatedAt: new Date()},

        // Anime
        { nombre: "Naruto", descripcion: "A young ninja with dreams of becoming the strongest leader of his village faces numerous challenges.", rating: 8.3, imagen: "naruto.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "One Piece", descripcion: "A group of pirates search for the ultimate treasure while facing dangerous foes and adventures.", rating: 8.6, imagen: "one-piece.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "Attack on Titan", descripcion: "Humanity fights for survival against giant humanoid creatures known as Titans.", rating: 8.7, imagen: "attack-on-titan.jpg", createdAt: new Date(), updatedAt: new Date()},

        // Comedy
        { nombre: "Brooklyn Nine-Nine", descripcion: "A comedic look at the detectives of the 99th precinct of the NYPD.", rating: 8.4, imagen: "brooklyn-nine-nine.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "The Office", descripcion: "A mockumentary-style series depicting the everyday lives of office employees at Dunder Mifflin.", rating: 8.9, imagen: "the-office.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "Parks and Recreation", descripcion: "A comedy series following the quirky employees of the Parks Department in Pawnee, Indiana.", rating: 8.6, imagen: "parks-and-recreation.jpg", createdAt: new Date(), updatedAt: new Date()},

        // History
        { nombre: "The Crown", descripcion: "A dramatized account of the reign of Queen Elizabeth II.", rating: 8.7, imagen: "the-crown.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "Vikings", descripcion: "A saga about the legendary Viking chieftain Ragnar Lothbrok and his rise to power.", rating: 8.5, imagen: "vikings.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "Band of Brothers", descripcion: "A miniseries focusing on the experiences of Easy Company during World War II.", rating: 9.4, imagen: "band-of-brothers.jpg", createdAt: new Date(), updatedAt: new Date()},

        // Medical
        { nombre: "Grey's Anatomy", descripcion: "The lives of surgical interns and doctors at Seattle Grace Hospital.", rating: 7.6, imagen: "greys-anatomy.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "House", descripcion: "A brilliant but misanthropic doctor solves complex medical cases while battling his own personal issues.", rating: 8.7, imagen: "house.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "ER", descripcion: "The emergency room staff at a Chicago hospital deal with patients and their own lives.", rating: 8.2, imagen: "er.jpg", createdAt: new Date(), updatedAt: new Date()},

        // Legal
        { nombre: "Suits", descripcion: "A college drop-out with a brilliant mind lands a job as a lawyer despite not having a degree.", rating: 8.5, imagen: "suits.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "How to Get Away with Murder", descripcion: "A law professor and her students become entangled in a murder plot and criminal investigations.", rating: 8.0, imagen: "how-to-get-away-with-murder.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "The Good Wife", descripcion: "A woman returns to the legal profession after her husband's scandalous fall from grace.", rating: 8.3, imagen: "the-good-wife.jpg", createdAt: new Date(), updatedAt: new Date()},

        // Western
        { nombre: "Westworld", descripcion: "In a futuristic Wild West-themed amusement park, guests interact with android hosts who gradually develop consciousness.", rating: 8.6, imagen: "westworld.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "Deadwood", descripcion: "The lives of lawmen and outlaws in the 19th-century South Dakota mining town of Deadwood.", rating: 8.6, imagen: "deadwood.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "Hell on Wheels", descripcion: "A former Confederate soldier seeks revenge against those who wronged him while working on the construction of the First Transcontinental Railroad.", rating: 8.1, imagen: "hell-on-wheels.jpg", createdAt: new Date(), updatedAt: new Date()},

        // War
        { nombre: "Band of Brothers", descripcion: "A miniseries about the experiences of Easy Company during World War II.", rating: 9.4, imagen: "band-of-brothers.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "The Pacific", descripcion: "A companion miniseries to Band of Brothers focusing on the Pacific front of World War II.", rating: 8.3, imagen: "the-pacific.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "Generation Kill", descripcion: "A miniseries based on the experiences of Marines during the early stages of the Iraq War.", rating: 8.4, imagen: "generation-kill.jpg", createdAt: new Date(), updatedAt: new Date()},

        // Sports
        { nombre: "Friday Night Lights", descripcion: "The lives of a high school football team and their community in Texas.", rating: 8.7, imagen: "friday-night-lights.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "The Last Dance", descripcion: "A documentary series chronicling the career of Michael Jordan and the 1990s Chicago Bulls.", rating: 9.2, imagen: "the-last-dance.jpg", createdAt: new Date(), updatedAt: new Date()},
        { nombre: "Ted Lasso", descripcion: "An American football coach is hired to manage a struggling English soccer team.", rating: 8.8, imagen: "ted-lasso.jpg", createdAt: new Date(), updatedAt: new Date()},
      ], {});
    } catch (error) {
      console.error('Error inserting data: ', error);
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('series', null, {});
  }
};
