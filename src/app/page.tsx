import Image from "next/image";
import styles from "./page.module.css";
import {
	SiJavascript,
	SiTypescript,
	SiPython,
	SiGo,
	SiPhp,
	SiRuby,
	SiHtml5,
	SiCss3,
	SiSass,
	SiTailwindcss,
	SiReact,
	SiNextdotjs,
	SiNodedotjs,
	SiGraphql,
	SiMongodb,
	SiPostgresql,
	SiMysql,
	SiGit,
	SiGooglecloud,
	SiDocker,
	SiKubernetes,
	SiLinux,
	SiVercel,
	SiFigma,
	SiRedux,
} from "react-icons/si";
import { IconType } from "react-icons";
import { VscAzureDevops, VscCode } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";
import { BsCode } from "react-icons/bs";
import { DiJava } from "react-icons/di";
import { IoCutSharp } from "react-icons/io5";

const skills: { name: string; icon: IconType }[] = [
	{ name: "JavaScript", icon: SiJavascript },
	{ name: "TypeScript", icon: SiTypescript },
	{ name: "Python", icon: SiPython },
	{ name: "Java", icon: DiJava },
	{ name: "C#", icon: IoCutSharp },
	{ name: "Go", icon: SiGo },
	{ name: "PHP", icon: SiPhp },
	{ name: "Ruby", icon: SiRuby },
	{ name: "HTML5", icon: SiHtml5 },
	{ name: "CSS3", icon: SiCss3 },
	{ name: "Sass", icon: SiSass },
	{ name: "Tailwind", icon: SiTailwindcss },
	{ name: "React", icon: SiReact },
	{ name: "Next.js", icon: SiNextdotjs },
	{ name: "Node.js", icon: SiNodedotjs },
	{ name: "GraphQL", icon: SiGraphql },
	{ name: "MongoDB", icon: SiMongodb },
	{ name: "PostgreSQL", icon: SiPostgresql },
	{ name: "MySQL", icon: SiMysql },
	{ name: "Git", icon: SiGit },
];

const resources: { name: string; icon: IconType }[] = [
	{ name: "Azure", icon: VscAzureDevops },
	{ name: "AWS", icon: FaAws },
	{ name: "GCP", icon: SiGooglecloud },
	{ name: "Docker", icon: SiDocker },
	{ name: "Kubernetes", icon: SiKubernetes },
	{ name: "Linux", icon: SiLinux },
	{ name: "Vercel", icon: SiVercel },
	{ name: "Figma", icon: SiFigma },
	{ name: "VS Code", icon: VscCode },
	{ name: "Zustand", icon: BsCode },
	{ name: "Redux", icon: SiRedux },
];

const demoProjects = [
	{
		title: "Portfolio Website",
		image: "/projects/portfolio.png",
		description: "A modern, responsive portfolio built with Next.js and Tailwind CSS.",
		source: "https://github.com/manelisi-mpotulo/portfolio",
		live: "https://manelisi.dev",
	},
	{
		title: "Task Manager App",
		image: "/projects/taskmanager.png",
		description:
			"A full-stack productivity app with authentication, built using React, Node.js, and MongoDB.",
		source: "https://github.com/manelisi-mpotulo/task-manager",
		live: "https://taskmanager-demo.vercel.app",
	},
	{
		title: "Weather Dashboard",
		image: "/projects/weather.png",
		description: "A real-time weather dashboard using OpenWeatherMap API and React Hooks.",
		source: "https://github.com/manelisi-mpotulo/weather-dashboard",
		live: "https://weather-demo.vercel.app",
	},
];

function Icon({ IconComponent, alt }: { IconComponent: IconType; alt: string }) {
	return (
		<span className={styles.skillIcon} aria-label={alt}>
			<IconComponent size={28} />
		</span>
	);
}

export default function Home() {
	return (
		<div className={styles.page}>
			{/* Animated background visual */}
			<div
				style={{
					position: "fixed",
					inset: 0,
					zIndex: 0,
					pointerEvents: "none",
					background:
						"radial-gradient(circle at 70% 20%, #00ffe733 0%, transparent 60%), radial-gradient(circle at 20% 80%, #00ffe71a 0%, transparent 70%)",
				}}
			/>

			<main className={styles.main} style={{ position: "relative", zIndex: 1 }}>
				{/* HERO */}
				<section className={styles.hero} style={{ minHeight: 220 }}>
					<div
						className={styles.avatarGlow}
						style={{ boxShadow: "0 0 64px 16px #00ffe7aa" }}>
						<Image
							className={styles.avatar}
							src="/next.svg"
							alt="Manelisi Mpotulo Avatar"
							width={110}
							height={110}
							priority
							style={{
								border: "4px solid var(--primary)",
								background: "#fff",
							}}
						/>
					</div>
					<div>
						<h1 className={styles.title} style={{ fontSize: "2.8rem" }}>
							Manelisi Mpotulo
							<span className={styles.futurist}>.dev</span>
						</h1>
						<p className={styles.subtitle} style={{ fontSize: "1.2rem" }}>
							Software Developer & Technical Problem Solver
						</p>
						<p className={styles.location}>Cape Town, South Africa</p>
						<div className={styles.contact}>
							<a href="mailto:mpotulom28@gmail.com">mpotulom28@gmail.com</a>
							<span> | </span>
							<a href="tel:+123456789">+123456789</a>
						</div>
					</div>
				</section>

				{/* ABOUT */}
				<section className={styles.about}>
					<h2 style={{ fontSize: "1.3rem", marginBottom: 8 }}>🚀 About Me</h2>
					<p>
						Passionate, detail-oriented developer specializing in{" "}
						<b>mobile app development</b>, <b>cloud infrastructure</b>, and{" "}
						<b>workflow optimization</b>. I deliver efficient, scalable, and
						user-friendly products with a futuristic, solution-driven approach.
					</p>
					<div className={styles.techBadges}>
						<span>React Native</span>
						<span>Expo</span>
						<span>Vercel</span>
						<span>Azure</span>
						<span>Zustand</span>
						<span>Redux</span>
					</div>
				</section>

				{/* SKILLS */}
				<section className={styles.skills}>
					<div className={styles.skillsTitle}>🛠️ Programming Languages</div>
					<div className={styles.skillsList}>
						{skills.map((skill) => (
							<div className={styles.skillBadge} key={skill.name}>
								<Icon IconComponent={skill.icon} alt={skill.name} />
								{skill.name}
							</div>
						))}
					</div>
				</section>

				{/* RESOURCES */}
				<section className={styles.skills}>
					<div className={styles.skillsTitle}>☁️ Cloud, DevOps & Tools</div>
					<div className={styles.skillsList}>
						{resources.map((resource) => (
							<div className={styles.skillBadge} key={resource.name}>
								<Icon IconComponent={resource.icon} alt={resource.name} />
								{resource.name}
							</div>
						))}
					</div>
				</section>

				{/* PROJECTS */}
				<section className={styles.projects}>
					<h2 style={{ fontSize: "1.3rem", marginBottom: 12 }}>
						📁 Projects & Experience
					</h2>
					<div className={styles.projectsGrid}>
						{demoProjects.map((project) => (
							<div className={styles.projectCard} key={project.title}>
								<div className={styles.projectIcon}>
									<Image
										src={project.image}
										alt={project.title}
										width={64}
										height={64}
										style={{ borderRadius: 12, objectFit: "cover" }}
									/>
								</div>
								<div className={styles.projectCardContent}>
									<div className={styles.projectTitle}>{project.title}</div>
									<div className={styles.projectDesc}>{project.description}</div>
									<div style={{ display: "flex", gap: 16, marginTop: 8 }}>
										<a
											className={styles.projectLink}
											href={project.source}
											target="_blank"
											rel="noopener noreferrer">
											Source Code
										</a>
										<a
											className={styles.projectLink}
											href={project.live}
											target="_blank"
											rel="noopener noreferrer">
											Live Demo
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* CTA */}
				<section className={styles.ctaSection}>
					<h2>📅 Availability</h2>
					<p>
						Currently accepting freelance projects. Need help with Expo, Azure, or app
						optimization? Let’s collaborate!
					</p>
					<a className={styles.primary} href="/src/pages/bookings/index.tsx">
						Book a Session
					</a>
				</section>
			</main>

			{/* FOOTER */}
			<footer className={styles.footer}>
				<span>© {new Date().getFullYear()} Manelisi Mpotulo</span>
				<a
					href="https://github.com/manelisi-mpotulo"
					target="_blank"
					rel="noopener noreferrer">
					<Image src="/next.svg" alt="GitHub" width={20} height={20} />
					GitHub
				</a>
				<a href="mailto:mpotulom28@gmail.com" target="_blank" rel="noopener noreferrer">
					<Image src="/file.svg" alt="Email" width={20} height={20} />
					Email
				</a>
			</footer>
		</div>
	);
}
