import Image from "next/image";
import styles from "./page.module.css";
import {
	SiGithub,
	SiJavascript,
	SiTypescript,
	SiPython,
	SiSharp,
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
	SiExpo,
	SiAuth0,
} from "react-icons/si";
import { IconType } from "react-icons";
import { VscAzureDevops, VscCode } from "react-icons/vsc";
import { FaAws, FaTag } from "react-icons/fa";
import { BsCode, BsFillLightningChargeFill } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { DiJava } from "react-icons/di";
import { RiSupabaseFill } from "react-icons/ri";
import Link from "next/link";

const skills: { name: string; icon: IconType }[] = [
	{ name: "JavaScript", icon: SiJavascript },
	{ name: "TypeScript", icon: SiTypescript },
	{ name: "Java", icon: DiJava },
	{ name: "HTML5", icon: SiHtml5 },
	{ name: "CSS3", icon: SiCss3 },
	{ name: "Sass", icon: SiSass },
	{ name: "Tailwind", icon: SiTailwindcss },
	{ name: "React", icon: SiReact },
	{ name: "Next.js", icon: SiNextdotjs },
	{ name: "Node.js", icon: SiNodedotjs },
	{ name: "PostgreSQL", icon: SiPostgresql },
	{ name: "MySQL", icon: SiMysql },
	{ name: "Git", icon: SiGit },
	{ name: "React Native", icon: SiReact },
	{ name: "Expo", icon: SiExpo },
];

const resources: { name: string; icon: IconType }[] = [
	{ name: "Azure", icon: VscAzureDevops },
	{ name: "AWS", icon: FaAws },
	{ name: "GCP", icon: SiGooglecloud },
	{ name: "Docker", icon: SiDocker },
	{ name: "Supabase", icon: RiSupabaseFill },
	{ name: "Linux", icon: SiLinux },
	{ name: "Vercel", icon: SiVercel },
	{ name: "Figma", icon: SiFigma },
	{ name: "VS Code", icon: VscCode },
	{ name: "Zustand", icon: BsCode },
	{ name: "Redux", icon: SiRedux },
	{ name: "auth0", icon: SiAuth0 },
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

const badges = ["React", "Next.js", "React Native", "TypeScript", "Expo", "Full Stack", "Zustand"];

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
				<section className={styles.hero}>
					<div className={styles.avatarGlow}>
						<Image
							className={styles.avatar}
							src="/memoji.png" // Replace with your actual avatar image
							alt="Manelisi Mpotulo Avatar"
							width={110}
							height={110}
							priority
						/>
					</div>
					<div>
						<h1 className={styles.title}>
							Manelisi Mpotulo
							<span className={styles.futurist}>.dev</span>
						</h1>
						<p className={styles.subtitle}>
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
					<h2 className={styles.aboutTitle}>🚀 About Me</h2>
					<p>
						Passionate, detail-oriented developer specializing in{" "}
						<b>mobile app development</b>, <b>cloud infrastructure</b>, and{" "}
						<b>workflow optimization</b>. I deliver efficient, scalable, and
						user-friendly products with a futuristic, solution-driven approach.
					</p>
					<div className={styles.techBadges}>
						{badges.map((badge, index) => (
							<span key={badge + index} className={styles.badge}>
								<FaTag /> {badge}
							</span>
						))}
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
					<h2 className={styles.projectsTitle}>📁 Projects & Experience</h2>
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
									<div className={styles.projectLinks}>
										<a
											className={styles.projectButton}
											href={project.source}
											target="_blank"
											rel="noopener noreferrer">
											<SiGithub />
											Source
										</a>
										<a
											className={styles.projectButton}
											href={project.live}
											target="_blank"
											rel="noopener noreferrer">
											<FiExternalLink />
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
					<Link className={styles.primary} href="/bookme">
						Book a Session
					</Link>
				</section>
			</main>

			{/* FOOTER */}
			<footer className={styles.footer}>
				<span>© {new Date().getFullYear()} Manelisi Mpotulo</span>
				<a
					href="https://github.com/manelisi-mpotulo"
					target="_blank"
					rel="noopener noreferrer">
					<SiGit size={20} />
					GitHub
				</a>
				<a href="mailto:mpotulom28@gmail.com" target="_blank" rel="noopener noreferrer">
					<BsFillLightningChargeFill size={20} />
					Email
				</a>
			</footer>
		</div>
	);
}
