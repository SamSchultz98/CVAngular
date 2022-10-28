import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'CV';
  name: string = "Samuel Schultz";
  phone: string = "513.418.1632";
  email: string = "sam.schultz@outlook.com";
  linkedin: string="LinkedIn";
  techtitle:string="Technologies";
  tech: string[]=[
    "Git","C#","CSS","SQL","Spring","NET Core",
    "Bootstrap","Typescript","Java","Entity Framework",
    "HTML","MySQL","WebApi","JavaScript","SQL Server","JSON",
    "REST","Maven","Agile","MS SQL","jQuery","Scrum",
    "Angular","ASP .Net",".Net","Exlipse","Hibernate","Git Hub",
    "SSMS"
  ]
  worktitle:string="Work Expierence"
  workcompany1:string="Red Wing Shoe Company"
  jobtitle1:string="Sales Manager"
  joblocation1:string="Cincinnati, OH"
  jobduration1:string="05.19 - 08.22"
  jobpoints1: string[]=[
    "Managed five dierect reports; oversaw operations, including scheduling day-to-day operational staff and mobile sales unit",
    "Processed payments, balance cash drawer, oversaw daily sales reports",
    "Lead the company in sales for all three years of tenure"

  ]
  workcompany2:string="Home Depot"
  jobtitle2:string="Head Cashier"
  joblocation2:string="Crescent Springs, KY"
  jobduration2:string="02.2015 - 06.2017"
  jobpoints2:string[]=[
  "Provided first level escaltion for customer issues, along with ensuring front end associates had correct cash amount with functional register",
  "Provided direct support in multi-functional capacity including dock, cash registers, and customer service",
  "Was responsible for the training and coaching of ten associates"
  ]

  educationtitle:string="Education"
  schools:string[]=[
    "Max Technical Training | Mason, OH | Full Stack Programming Bootcamp",
    "Davenport University | Grand Rapids, MI | Cyber Security",
    "Shawnee State University | Portsmouthm OH | Simulation and Video Engineering",
    "Highlands High School | Fort Thomas, KY | College Prep"
  ]
}

