// local-data replacements for the original DatoCMS queries — identical exports
import { profileBanner, workPermit, timeline, projects, certifications, contactMe, skills } from '../data';

export async function getProfileBanner() { return profileBanner; }
export async function getWorkPermit() { return workPermit; }
export async function getTimeline() { return timeline; }
export async function getProjects() { return projects; }
export async function getCertifications() { return certifications; }
export async function getContactMe() { return contactMe; }
export async function getSkills() { return skills; }
