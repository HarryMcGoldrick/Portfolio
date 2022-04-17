/* Template 

title: string
description: string
bullets: string[]
img: string //src url
techIcons: string [] //src url
githubUrl: string

*/


const projects = [
    {
        title: 'Rogue Worlds',
        description: 'A multiplayer gathering roguelike video game. Players must gather resources and level up to survive an increasing horde of enemies \
        *WORK IN PROGRESS*',
        bullets: [
            'Multiplayer through steamworks API',
            'Procedural world generation using marching cubes',
            'Real time AI pathfinding using A*',
            'Biome system for varied resources and terrain',
            "Destructible resources",
            'Editable terrain',
            'Roguelike progression system',
            'Class unlocks',
        ],
        img: 'SkillifyImage.png',
        techIcons: [
            'UnityIcon.png',
            'SteamIcon.png',
            'CSharpIcon.png',
        ],
        githubUrl: null,
    },
    {
        title: 'Skillify',
        description: 'A web application designed to create and utilise skill trees / progression maps. \
        With progression mode users can track their progress along a skill tree, aswell as earning achievements and badges',
        bullets: [
            'User authentication',
            'Global state management with Redux',
            'Graph editor with persistant saving',
            "Integrated Youtube & Google Books API's",
            'User achievements and badges',
            'Publicity settings to hide & prevent modification from other users',
        ],
        img: 'SkillifyImage.png',
        techIcons: [
            'ReactIcon.png',
            'ReduxIcon.png',
            'NodeJsIcon.png',
            'TSIcon.png',
            'MongoIcon.png'
        ],
        githubUrl: 'https://github.com/HarryMcGoldrick/skillify-frontend'
    },
    {
        title: 'Starfall',
        description: 'A simple web application that displays the location of fallen meteorites using Google Maps and the Nasa meteorite data set',
        bullets: [
            'User authentication',
            'Custom Google Maps integration',
            'Meteorite searching and filtering',
            'Location based filtering',
            "User favouriting system",
        ],
        img: 'SkillifyImage.png',
        techIcons: [
            'AngularLogo.png',
            'FlaskLogo.png',
            'PythonLogo.png',
            'TSIcon.png',
            'MongoIcon.png'
        ],
        githubUrl: 'https://github.com/HarryMcGoldrick/starfall-frontend'
    }
]

export default projects;