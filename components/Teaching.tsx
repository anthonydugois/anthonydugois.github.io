import * as React from "react";

export function Topic({ lang, label, abbr }: { lang: string; label: string; abbr: string }) {
	return (
		<>
			<abbr title={abbr}>{label}</abbr> ({lang})
		</>
	);
}

export function Type({ type }: { type: string }) {
	switch (type) {
		case "td":
			return <abbr title="Travaux Dirigés (Tutorials)">TD</abbr>;
		case "tp":
			return <abbr title="Travaux Pratiques (Practical Work)">TP</abbr>;
		case "both":
			return (
				<>
					<abbr title="Travaux Dirigés (Tutorials)">TD</abbr>
					{"/"}
					<abbr title="Travaux Pratiques (Practical Work)">TP</abbr>
				</>
			);
		case "other":
			return <>{"—"}</>;
		default:
			return null;
	}
}

export function Level({ level }: { level: string }) {
	switch (level) {
		case "l1":
			return <abbr title="Licence 1 (Bachelor's degree)">L1</abbr>;
		case "l2":
			return <abbr title="Licence 2 (Bachelor's degree)">L2</abbr>;
		case "l3":
			return <abbr title="Licence 3 (Bachelor's degree)">L3</abbr>;
		case "m1":
			return <abbr title="Master 1 (Master's degree)">M1</abbr>;
		case "m2":
			return <abbr title="Master 2 (Master's degree)">M2</abbr>;
		default:
			return null;
	}
}

export function Location({ location }: { location: string }) {
	switch (location) {
		case "ensl":
			return <abbr title="École Normale Supérieure de Lyon">ENSL</abbr>;
		case "ufc":
			return <abbr title="Université de Franche-Comté">UFC</abbr>;
		default:
			return null;
	}
}

export default function Teaching() {
	return (
		<table className="w-full min-w-[38rem] border-collapse">
			<thead className="text-left font-medium text-sm text-zinc-900">
				<tr className="border-t-2 border-b border-zinc-600">
					<th className="py-2 pr-2 w-auto">Year</th>
					<th className="py-2 px-2 w-auto">Topic</th>
					<th className="py-2 px-2 w-auto">Type</th>
					<th className="py-2 px-2 w-auto">Level</th>
					<th className="py-2 pl-2 w-auto">Location</th>
				</tr>
			</thead>
			<tbody className="text-left font-normal text-sm text-zinc-700 align-top">
				<tr>
					<td rowSpan={8} className="pt-2 pr-2">
						2023-2024
					</td>
					<td className="pt-2 px-2">
						<Topic
							lang="fr"
							label="Bases de la Programmation"
							abbr="Basics of Computer Programming"
						/>
					</td>
					<td className="pt-2 px-2">
						<Type type="both" />
					</td>
					<td className="pt-2 px-2">
						<Level level="l1" />
					</td>
					<td className="pt-2 pl-2">
						<Location location="ufc" />
					</td>
				</tr>
				<tr>
					<td className="pt-2 px-2">
						<Topic lang="fr" label="Langages du Web" abbr="Web Programming" />
					</td>
					<td className="pt-2 px-2">
						<Type type="tp" />
					</td>
					<td className="pt-2 px-2">
						<Level level="l2" />
					</td>
					<td className="pt-2 pl-2">
						<Location location="ufc" />
					</td>
				</tr>
				<tr>
					<td className="pt-2 px-2">
						<Topic lang="fr" label="Web Avancé" abbr="Advanced Web Programming" />
					</td>
					<td className="pt-2 px-2">
						<Type type="tp" />
					</td>
					<td className="pt-2 px-2">
						<Level level="l3" />
					</td>
					<td className="pt-2 pl-2">
						<Location location="ufc" />
					</td>
				</tr>
				<tr>
					<td className="pt-2 px-2">
						<Topic lang="fr" label="Analyse Syntaxique" abbr="Syntax Analysis" />
					</td>
					<td className="pt-2 px-2">
						<Type type="tp" />
					</td>
					<td className="pt-2 px-2">
						<Level level="l3" />
					</td>
					<td className="pt-2 pl-2">
						<Location location="ufc" />
					</td>
				</tr>
				<tr>
					<td className="pt-2 px-2">
						<Topic
							lang="fr"
							label="Encadrement Projet & Stage"
							abbr="Project & Internship Supervision"
						/>
					</td>
					<td className="pt-2 px-2">
						<Type type="other" />
					</td>
					<td className="pt-2 px-2">
						<Level level="l3" />
					</td>
					<td className="pt-2 pl-2">
						<Location location="ufc" />
					</td>
				</tr>
				<tr>
					<td className="pt-2 px-2">
						<Topic lang="fr" label="Réseaux" abbr="Networks" />
					</td>
					<td className="pt-2 px-2">
						<Type type="tp" />
					</td>
					<td className="pt-2 px-2">
						<Level level="m1" />
					</td>
					<td className="pt-2 pl-2">
						<Location location="ufc" />
					</td>
				</tr>
				<tr>
					<td className="pt-2 px-2">
						<Topic
							lang="fr"
							label="Compilation & Interprétation"
							abbr="Compilers & Interpreters"
						/>
					</td>
					<td className="pt-2 px-2">
						<Type type="tp" />
					</td>
					<td className="pt-2 px-2">
						<Level level="m1" />
					</td>
					<td className="pt-2 pl-2">
						<Location location="ufc" />
					</td>
				</tr>
				<tr className="border-b border-zinc-600">
					<td className="py-2 px-2">
						<Topic lang="fr" label="Test Fonctionnel" abbr="End-to-End Testing" />
					</td>
					<td className="py-2 px-2">
						<Type type="tp" />
					</td>
					<td className="py-2 px-2">
						<Level level="m2" />
					</td>
					<td className="py-2 pl-2">
						<Location location="ufc" />
					</td>
				</tr>
				<tr>
					<td rowSpan={2} className="pt-2 pr-2">
						2022-2023
					</td>
					<td className="pt-2 px-2">
						<Topic
							lang="fr"
							label="Bases de la Programmation"
							abbr="Basics of Computer Programming"
						/>
					</td>
					<td className="pt-2 px-2">
						<Type type="both" />
					</td>
					<td className="pt-2 px-2">
						<Level level="l1" />
					</td>
					<td className="pt-2 pl-2">
						<Location location="ufc" />
					</td>
				</tr>
				<tr className="border-b border-zinc-600">
					<td className="py-2 px-2">
						<Topic lang="fr" label="Réseaux" abbr="Networks" />
					</td>
					<td className="py-2 px-2">
						<Type type="tp" />
					</td>
					<td className="py-2 px-2">
						<Level level="m1" />
					</td>
					<td className="py-2 pl-2">
						<Location location="ufc" />
					</td>
				</tr>
				<tr>
					<td rowSpan={2} className="pt-2 pr-2">
						2021-2022
					</td>
					<td className="pt-2 px-2">
						<Topic
							lang="fr"
							label="Circuits Logiques et Réseaux"
							abbr="Logic Circuits & Networks"
						/>
					</td>
					<td className="pt-2 px-2">
						<Type type="both" />
					</td>
					<td className="pt-2 px-2">
						<Level level="l3" />
					</td>
					<td className="pt-2 pl-2">
						<Location location="ensl" />
					</td>
				</tr>
				<tr className="border-b border-zinc-600">
					<td className="py-2 px-2">
						<Topic
							lang="en"
							label="Parallel and Distributed Algorithms & Programs"
							abbr="Parallel and Distributed Algorithms & Programs"
						/>
					</td>
					<td className="py-2 px-2">
						<Type type="both" />
					</td>
					<td className="py-2 px-2">
						<Level level="m1" />
					</td>
					<td className="py-2 pl-2">
						<Location location="ensl" />
					</td>
				</tr>
				<tr>
					<td rowSpan={2} className="pt-2 pr-2">
						2020-2021
					</td>
					<td className="pt-2 px-2">
						<Topic
							lang="fr"
							label="Architecture, Système et Réseaux"
							abbr="Architecture, System & Networks"
						/>
					</td>
					<td className="pt-2 px-2">
						<Type type="both" />
					</td>
					<td className="pt-2 px-2">
						<Level level="l3" />
					</td>
					<td className="pt-2 pl-2">
						<Location location="ensl" />
					</td>
				</tr>
				<tr className="border-b-2 border-zinc-600">
					<td className="py-2 px-2">
						<Topic lang="en" label="Integrated Project" abbr="Integrated Project" />
					</td>
					<td className="py-2 px-2">
						<Type type="both" />
					</td>
					<td className="py-2 px-2">
						<Level level="m1" />
					</td>
					<td className="py-2 pl-2">
						<Location location="ensl" />
					</td>
				</tr>
			</tbody>
		</table>
	);
}
