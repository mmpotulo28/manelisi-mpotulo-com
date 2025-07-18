"use client"; // This component needs to be a client component to use hooks and event handlers.

import { InlineWidget } from "react-calendly";
import styles from "./bookme.module.css";
import Link from "next/link";
import { SiGit } from "react-icons/si";
import { BsFillLightningChargeFill } from "react-icons/bs";

const BookingsPage = () => {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<div className={styles.header}>
					<Link href="/" className={styles.homeLink}>
						&larr; Back to Home
					</Link>
					<h1 className={styles.title}>Book a Session</h1>
					<p className={styles.subtitle}>
						Schedule a 30-minute introductory call to discuss your project, ideas, or
						any questions you might have.
					</p>
				</div>
				<div className={styles.widgetContainer}>
					<InlineWidget
						url="https://calendly.com/mpotulom28/30min" // <-- IMPORTANT: Replace with your Calendly link!
						styles={{
							height: "1000px",
							borderRadius: "16px",
						}}
						pageSettings={{
							backgroundColor: "181c23", // var(--surface)
							hideEventTypeDetails: false,
							hideLandingPageDetails: false,
							primaryColor: "00ffe7", // var(--primary)
							textColor: "f5f6fa", // var(--foreground)
						}}
					/>
				</div>
			</main>
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
};

export default BookingsPage;
