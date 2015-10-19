// javascript file to make, and display objects.

var banner = {
	"img": "images/glacier-park-landscape-lrg.jpg"
}

var bio = {
	"name": "Isabel Zv",
	"role": "Web Developer Extraordinaire.",
	"skills": ["HTML", "CSS", "JavaScript", "Python", "Git and GitHub", 
				"FrontEnd Web Development", "Quality Assurence"],
	"bioPic": "images/bio-pic.jpg",
	"contacts": {
		"mobile": "425 533-4884",
		"email": "isabelzv@hotmail.com",
		"webSite": "http://isabelzv.github.io",
		"location": "Boulder, CO",
		"GitHub": "isabelzv"
	},
	"welcomeMsg": "Welcome to my resume."
}

var formattedBanner = HTMLbanner.replace('%data%', banner.img);
$(".banner").append(formattedBanner);

var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
$("#header").append(formattedBioPic);
var formattedRole = HTMLrole.replace('%data%', bio.role);
$("#header").append(formattedRole);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMsg);
$("#header").append(formattedwelcomeMsg);


// Example of formatting and displaying bio.skills property without using a function.
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace('%data%', bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace('%data%', bio.skills[3]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace('%data%', bio.skills[4]);
	$("#skills").append(formattedSkill);
} 

//format and append contact info to header
var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
$('#topContacts').append(formattedMobile);
var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
$('#topContacts').append(formattedEmail);
var formattedGitHub = HTMLgithub.replace('%data%', bio.contacts.GitHub);
$('#topContacts').append(formattedGitHub);
var formattedWebSite = HTMLwebSite.replace('%data%', bio.contacts.webSite);
$('#topContacts').append(formattedWebSite);
var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
$('#topContacts').append(formattedLocation);

//format and append contact info to footer
var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
$('#footerContacts').append(formattedMobile);
var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
$('#footerContacts').append(formattedEmail);
var formattedGitHub = HTMLgithub.replace('%data%', bio.contacts.GitHub);
$('#footerContacts').append(formattedGitHub);
var formattedWebSite = HTMLwebSite.replace('%data%', bio.contacts.webSite);
$('#footerContacts').append(formattedWebSite);
var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
$('#footerContacts').append(formattedLocation);

var work = {
	"jobs": [
		{
			"employer": "Microsoft", 
			"location": "Redmond, WA, USA",
			"title": "SDT",
			"dates": "02/15 - 06/15",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."+
						   " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."+
						   " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."+
						   "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		},
		{
			"employer": "Stohke.com", 
			"location": "Bellevue, WA, USA",
			"title": "QA Specialist",
			"dates": "07/13 - 09/14",
			"description": "- Performed in-depth blackbox testing of mobile applications on Windows Phone and IOS platforms"+
						   "- Designed and executed test plans for various aspects of the website and mobile application"+
						   "- Communicated with developers to ensure issues were addressed"+ 
						   "- Collaborated with other testers to ensure full testing coverage of production and development sites as well as"+
						   "mobile applications across an array of platforms for multiple releases"+
						   "- Initiated a new line of Quality Assurance within the testing process focusing on UI design"
		},
		{
			"employer": "Peace River South School District", 
			"location": "Dawson Creek, BC, Canada",
			"title": "Teacher",
			"dates": "01/10 - 06/10",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."+
						   " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."+
						   " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."+
						   "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		},
		{
			"employer": "Rocky Mountain Flatbread Education Society", 
			"location": "Vancouver, BC, Canada",
			"title": "Program Developer",
			"dates": "09/06 - 09/10",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."+
						   " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."+
						   " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."+
						   "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."			
		}
	]
}

// display() function property to work object that formats and apppends other properties in work object.
work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}	
}
work.display();

// Example of the bracket notation for objects in JS
// var education = {}
// 	education["name"] = "Cambridge University";
// 	education["years"] = "2003 -2006";
// 	education["location"] = "Cambridge, UK";

var education = {
    "schools": [
        {
            "name": "University of Washington",
            "location": "Seattle, WA, USA",
            "degree": "Software Testing and Quality Assurence Certificate",
            "major": ["Quality Assurence"],
            "url": "http://www.washington.edu",
            "dates": "09/14 - 03/15"
        },
        {
            "name": "Simon Fraser University",
            "location": "Vancouver, BC, Canada",
            "degree": "BA",
            "major": ["Education"],
            "url": "http://www.sfu.ca",
            "dates": "01/10 - 12/10"
        },
        {
            "name": "Cambridge University",
            "location": "Cambridge, UK",
            "degree": "BA",
            "major": [
                "Education",
                " History"
            ],
            "url": "https://www.cam.ac.uk",
            "dates": "09/03 - 06-06"
        }
    ],
    "onlineCourses": [
        {
        	"title": "Front-End Web Developer NanoDegree",
            "school": "Udacity",
            "dates": "08/15 - present",
            "url": "https://www.udacity.com"
        }
    ]
}

//display() function property for education object.
education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
		$(".education-entry:last").append(formattedName);
		var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);
		var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
	}	
	for (course in education.onlineCourses) {
		$(".education-entry:last").append(HTMLonlineClasses);
		var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
		$(".education-entry:last").append(formattedTitle);
		var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedSchool);
		var formattedDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedURL = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedURL);
	}
}
education.display();

var projects = {
	"projects": [
		{
			"title": "Portfolio",
			"dates": "08/15 - 09/15",
			"description": "Created a website to host my portfolio. My first front end web development project "+
						   "I learnt a lot about HTML and CSS",
			"image": ["images/mountain-hike-sml.jpg", "images/montana-sunset-sml.jpg"]
		},
		{
			"title": "Interactive Resume",
			"dates": "09/15 - 10/15",
			"description": "Created an interactive resume to showcase my work and skills. My first project using JavaScript and jQuery",
			"image": ["images/mountain-hike-sml.jpg", "images/montana-sunset-sml.jpg"]
		}
	]
}

// adding a display() function property to the projects object that displays the other properties. 
// Nice way to organize work.
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].image[0]);
		$(".project-entry:last").append(formattedImage);	
		var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].image[1]);
		$(".project-entry:last").append(formattedImage);
	}
} 
projects.display();

// Appends map
$("#mapDiv").append(googleMap);

//logs where the user clicks on the page using a J-Query event object (loc)
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});

$('.anchor-link').click(function(){
    $('html, body').animate({
        // Keep 80 off top for fixed nav bar
        scrollTop: $( $(this).attr('href') ).offset().top - 80
    }, 500);
    return false;
});

// // internationalize Button
// $("#main").append(internationalizeButton);
// function inName(name) {
// 	name = name.trim().split(" ");
// 	name[1] = name[1].toUpperCase();
// 	name[0] = name[0].slice(0,1).toUpperCase() +
// 			  name[0].slice(1).toLowerCase();

// 	return name[0] + " " + name[1];
// }










