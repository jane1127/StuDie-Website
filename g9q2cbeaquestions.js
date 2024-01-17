let questions = [
    {
        numb: 0,
        question: "Ready to take the quiz again?",
        answer: "YES, I AM READY!",
        options: [
            "YES, I AM READY!",
            "NO",
            "yes",
            "no :("
        ]
    },
    {
        numb: 1,
        question: "A student is exploring their lesson about quantum numbers and their roles in determining the characteristics of electron orbitals. Which quantum number specifically indicates the shape of the orbital where an electron is located?",
        answer: "B) Angular momentum quantum number",
        options: [
            "A) Principal quantum number",
            "B) Angular momentum quantum number",
            "C) Magnetic quantum number",
            "D) Spin quantum number"
        ]
    },
    {
        numb: 2, 
        question: "You're setting up a lab experiment to study electron orbitals. You adjust the magnetic field direction to examine how electrons align within an orbital. Which quantum number will help you understand the orientation of the orbital in space?",
        answer: "C) Magnetic quantum number",
        options: [
            "A) Principal quantum number",
            "B) Angular momentum quantum number",
            "C) Magnetic quantum number",
            "D) Spin quantum number"
        ]
    },
    {
        numb: 3,
        question: "A student is studying the characteristics of the angular momentum quantum number (l) and its relationship to orbital shapes. Which of the following options correctly describes the orbital shapes corresponding to the angular momentum quantum number (l)?",
        answer: "A) Spherical shape, two lobes, four lobes, eight lobes",
        options: [
            "A) Spherical shape, two lobes, four lobes, eight lobes",
            "B) Triangle shape, three lobes, five lobes, seven lobes",
            "C) Spherical shape, three lobes, five lobes, eight lobes",
            "D) Spherical shape, two lobes, four lobes, seven lobes"
        ]
    },
    {
        numb: 4, 
        question: "A student is studying electron configurations and wants to understand the role of the principal quantum number (n). What does the principal quantum number (n) represent in an electron configuration?",
        answer: "B) The energy level or shell of an electron",
        options: [
            "A) The shape of the orbital",
            "B) The energy level or shell of an electron",
            "C) The orientation of the orbital in space",
            "D) The spin of the electron"
        ]
    },
    {
        numb: 5,
        question: "A student is learning about the electron configuration of Nitrogen (Z=7). What is the electron configuration of Nitrogen?",
        answer: "A) 1s² 2s² 2p³",
        options: [
            "A) 1s² 2s² 2p³",
            "B) 1s² 2s² 2p⁶",
            "C) 1s² 2s² 2p⁴",
            "D) 1s² 2s¹"
        ]
    },
    {
        numb: 6, 
        question: "A chemist is studying a new element. She observe two electrons in the same orbital, and they have different spin quantum numbers. What does this tell you about these electrons?",
        answer: "D) It defines the orientation of the electron's spin.",
        options: [
            "A) It determines the energy level of an electron.",
            "B) It specifies the shape of the electron's orbital.",
            "C) It indicates the direction of the electron's motion",
            "D) It defines the orientation of the electron's spin."
        ]
    },
    {
        numb: 7,
        question: "A chemistry student is studying the quantum mechanical model and wants to know where electrons are likely to be found within an atom. What term describes these specific regions?",
        answer: "D) Orbitals",
        options: [
            "A) Orbits",
            "B) Shells",
            "C) Subshells",
            "D) Orbitals"
        ]
    },
    {
        numb: 8,
        question: "A student in a chemistry class is curious about the arrangement of electrons in an atom. What best describes their arrangement, based on the quantum mechanical model?",
        answer: "C) In energy levels and sublevels. ",
        options: [
            "A) In concentric circles around the nucleus. ",
            "B) In fixed paths with specific distances from the nucleus.",
            "C) In energy levels and sublevels.",
            "D) In random patterns throughout the atom."
        ]
    },
    {
        numb: 9,
        question: "A chemist is analyzing the magnetic quantum numbers of electrons in a d-subshell. What is the sum of all possible values of the magnetic quantum number for an electron in this subshell?",
        answer: "B) -4",
        options: [
            "A) 5",
            "B) -4",
            "C) 0",
            "D) -1/4"
        ]
    },
    {
        numb: 10, 
        question: "A curious student is researching Pauli's Exclusion Principle and its implications for electron arrangement. How does Pauli's Exclusion Principle impact the behavior of electrons in atoms?",
        answer: "B) Pauli's Exclusion Principle ensures that no two electrons in an atom have the same set of quantum numbers.",
        options: [
            "A) Pauli's Exclusion Principle determines the speed at which electrons move within an atom.",
            "B) Pauli's Exclusion Principle ensures that no two electrons in an atom have the same set of quantum numbers.",
            "C) Pauli's Exclusion Principle permits electrons with the same set of quantum numbers to share an orbital.",
            "D) Pauli's Exclusion Principle restricts electrons from occupying the same orbital if they have identical spin orientations."
        ]
    },
    {
        numb: 11,
        question: "As a chemistry student navigating the quantum world of electrons, how do you follow the Aufbau Principle when filling orbitals in a multi-electron atom?",
        answer: "D) Fill orbitals with the lowest energy first.",
        options: [
            "A) Fill orbitals with the same spin first.",
            "B) Fill orbitals with the opposite spin first.",
            "C) Fill orbitals randomly.",
            "D) Fill orbitals with the lowest energy first."
        ]
    },
    {
        numb: 12,
        question: "You are assisting a chemistry student in identifying the quantum number for an electron in a spherical-shaped orbital. In this scenario, what is the correct angular momentum quantum number for an s-orbital?",
        answer: "A) 0",
        options: [
            "A) 0",
            "B) 1",
            "C) 2",
            "D) 3"
        ]
    },
    {
        numb: 13,
        question: "A student compares electrons in an atom to floors in a building. Which quantum number corresponds to the different floors or energy levels?",
        answer: "C) The energy level of the orbital.",
        options: [
            "A) The size of the orbital.",
            "B) Electrons exist with both specific positions and velocities simultaneously",
            "C) The energy level of the orbital.",
            "D) The orientation of the orbital in space."
        ]
    },
    {
        numb: 14,
        question: "A student is learning about the wave mechanical model. What concept does this model propose about electrons in an atom?",
        answer: "D) Electrons are found in electron clouds with specific energy levels",
        options: [
            "A) Electrons follow predictable paths",
            "B) Electrons have definite positions and velocities simultaneously",
            "C) Electrons do not exhibit wave-particle duality",
            "D) Electrons are found in electron clouds with specific energy levels"
        ]
    },
    {
        numb: 15,
        question: "Picture yourself in a basic chemistry class, investigating electron properties. What spin quantum number (s) is typically associated with electrons?",
        answer: "C) 1/2",
        options: [
            "A) 0",
            "B) -1/3",
            "C) 1/2",
            "D) 2"       
        ]
    }
]