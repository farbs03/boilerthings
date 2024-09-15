"use server";

import * as z from "zod";
import { AttachmentBuilder, EmbedBuilder, WebhookClient } from "discord.js";

export async function sendApplication(data: any) {
	const client = new WebhookClient({
		id: process.env.DISCORD_WEBHOOK_ID ?? "",
		token: process.env.DISCORD_WEBHOOK_TOKEN ?? "",
	});

	const applicationSchema = z.object({
		name: z.string().max(50),
		email: z.string().max(50),
		resume: z.instanceof(File),
		whyApply: z.string().max(2000),
	});
	console.log(data);

	const validatedData = applicationSchema.safeParse({
		name: data.get("name"),
		email: data.get("email"),
		resume: data.get("resume") as File,
		whyApply: data.get("whyApply"),
	});

	if (!validatedData.success) {
		return {
			errors: validatedData.error.flatten().fieldErrors,
		};
	}

	const embed = new EmbedBuilder()
		.setTitle(validatedData.data.name)
		.setDescription(validatedData.data.whyApply)
		.setFooter({
			text: validatedData.data.email,
		})
		.setTimestamp();

	try {
		await client.send({
			embeds: [embed],
			files: [
				new AttachmentBuilder(
					Buffer.from(await validatedData.data.resume.arrayBuffer()),
					{
						name: "resume.pdf",
					}
				),
			],
		});
	} catch (err) {
		console.log(err);
	}

	return {
		success: true,
	};
}
