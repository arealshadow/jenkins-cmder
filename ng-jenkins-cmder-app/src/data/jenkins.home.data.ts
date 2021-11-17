import { JenkinsJobData } from "./jenkins.job.data";

export class JenkinsHomeData {
    numExecutors: number;
    description: string;
    jobs: JenkinsJobData[];    
}