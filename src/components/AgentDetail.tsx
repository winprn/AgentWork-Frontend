import type { Agent } from "@/types";
import { Button } from "./ui/button";
import badge1 from "@/assets/badge-1.png";
import badge2 from "@/assets/badge-2.png";
const badges = [
	{
		name: "Badge 1",
		image: badge1,
	},
	{
		name: "Badge 2",
		image: badge2,
	},
];

interface AgentDetailProps {
	onClick: (index: number) => void;
	index: number;
	agent: Agent;
	invited?: boolean;
}

export const AgentDetail = ({
	onClick,
	agent,
	invited,
	index,
}: AgentDetailProps) => {
	return (
		<div className="flex flex-col gap-4 py-6 font-['Rowdies'] text-wrap px-4">
			<div className="flex flex-col gap-4">
				<h2 className="text-3xl">Badges</h2>
				<div className="flex gap-4 overflow-scroll">
					{badges.map((badge) => (
						<img
							key={badge.name}
							src={badge.image}
							alt={badge.name}
							className="rounded-full"
						/>
					))}
				</div>
			</div>
			<div className="text-black">
				<p>{agent.description}</p>
			</div>
			<div className="flex justify-between items-end">
				<div>
					<p>Team</p>
					<p className="text-black">BiUwU</p>
				</div>
				<Button
					type="button"
					onClick={() => onClick(index)}
					className="rounded-full px-8 bg-transparent text-black hover:bg-transparent border border-[#0039C8]"
				>
					{invited ? "Invited" : "Invite"}
				</Button>
			</div>
		</div>
	);
};
