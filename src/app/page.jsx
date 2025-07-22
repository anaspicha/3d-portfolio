const Card = ({ children }) => (
  <div className="rounded-2xl overflow-hidden shadow-md bg-white">{children}</div>
);
const CardContent = ({ children }) => (
  <div className="p-4">{children}</div>
);
const projects = [
  {
    title: "Interior 01",
    image: "/images/01.jpg",
    description: "Modern living space with natural light."
  },
  {
    title: "Interior 02",
    image: "/images/02.jpg",
    description: "Elegant and cozy room design."
  },
  {
    title: "Red Theme Room",
    image: "/images/červený.jpg",
    description: "Warm red tones in interior styling."
  },
  {
    title: "Modern Apartment",
    image: "/images/final_4k.jpg",
    description: "Spacious modern apartment visualization."
  },
  {
    title: "Bathroom Design",
    image: "/images/Koupelna.jpg",
    description: "Minimalist and elegant bathroom."
  },
  {
    title: "Lobby Concept",
    image: "/images/lobby_final.jpg",
    description: "Hotel lobby with stylish atmosphere."
  },
  {
    title: "Bedroom",
    image: "/images/Ložnice.jpg",
    description: "Cozy and calm bedroom scene."
  },
  {
    title: "Blue Toned Interior",
    image: "/images/modrý.jpg",
    description: "Cool blue color palette with modern design."
  },
  {
    title: "Living Room 1",
    image: "/images/OP_01.jpg",
    description: "Functional and aesthetic living room."
  },
  {
    title: "Living Room 2",
    image: "/images/OP_02.jpg",
    description: "Second angle of the living room."
  }
];

export default function PortfolioPage() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-2">Anastasiia Spichak – 3D Artist</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I am a 34-year-old 3D artist with 3 years of experience in interior and architectural visualization.<br />
          This is not just a job for me — it's my passion. I approach each project with care, attention to detail, and full commitment.<br />
          I work with 3ds Max and Corona Renderer, creating warm, modern, and cozy visual stories.<br />
          You can always count on me to deliver high-quality results on time.
        </p>
        <p className="mt-4 font-medium">WhatsApp: +420 722 451 039</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <Card key={idx} className="rounded-2xl overflow-hidden shadow-md">
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-1">{project.title}</h2>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
