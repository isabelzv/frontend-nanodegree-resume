// Example of appending to the main section of the HTML
// $("#main").append(funThoughts);

// Example of how to use the string.replace method
// var name = "Isabel Zv";
// var formattedName = HTMLheaderName.replace("%data%", name);

// var role = "Web Developer";
// var formattedRole = HTMLheaderRole.replace("%data%", role);

// Example of appending and prepending to the header
// $("#header").append(formattedRole);
// $("#header").prepend(formattedName);


var bio = {
	"name": "Isabel Zv",
	"role": "Web Developer",
	"skills": ["HTML, ", "CSS, ", "JavaScript, ", "Python, ", "Git and GitHub, ", 
				"FrontEnd Web Development, ", "Quality Assurence"],
	"bioPic": "https://plus.google.com/u/0/me",
	"contacts": {
		"mobile": "425 533-4884",
		"email": "isabelzv@hotmail.com",
		"webSite": "http://isabelzv.github.io",
		"location": "Boulder, CO",
		"GitHub": "isabelzv"
	},
	"welcome message": "Welcome to my resume."
}

// Example of how to add a property to an object after declaring it.
// bio.city = "Boulder, CO";
// bio["city"] = "Boulder, CO";

var work = {
	// TODO add description properties to position objects. 
	"jobs": [
		{
			"employer": "Microsoft", 
			"location": "Redmond, WA",
			"title": "SDT",
			"dates": "02/15 - 06/15",
			"description": ""
		},
		{
			"employer": "Stohke.com", 
			"location": "Bellevue, WA",
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
			"description": ""
		},
		{
			"employer": "Rocky Mountain Flatbread Education Society", 
			"location": "Vancouver, BC, Canada",
			"title": "Program Developer",
			"dates": "09/06 - 09/10",
			"description": ""			
		}
	]
}

// Example of the bracket notation for objects in JS
// var education = {}
// 	education["name"] = "Cambridge University";
// 	education["years"] = "2003 -2006";
// 	education["location"] = "Cambridge, UK";

var education = {
    "schools": [
        {
            "name": "University of Washington",
            "location": "Seattle, WA",
            "degree": "Software Testing and Quality Assurence Certificate",
            "url": "http://www.washington.edu",
            "dates": "09/14 - 03/15"
        },
        {
            "name": "Simon Fraser University",
            "location": "Vancouver, Canada",
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
                "History"
            ],
            "url": "https://www.cam.ac.uk",
            "dates": "09/03 - 06-06"
        }
    ],
    "online courses": [
        {
            "name": "Udacity",
            "degree": "nano degree",
            "major": ["Front End Web Development"],
            "url": "https://www.udacity.com",
            "dates": "08/15 - present"
        }
    ]
}

var projects = {
	"projects": [
		{
			"title": "Portfolio",
			"dates": "08/15 - 09/15",
			"description": "Created a website to host my portfolio. My first front end web development project "+
						   "I learnt a lot about HTML and CSS",
			"image": "http://isabelzv.github.io/images/mountain-hike-sml.jpg"
		},
		{
			"title": "Interactive Resume",
			"dates": "09/15 - 10/15",
			"description": "Created an interactive resume to showcase my work and skills. My first project using JS",
			"image": ""
		}
	]
}

// the following two lines of code have errors (I don't know why).
// $("#main").append(bio.welcome message);
// $("#main").append(bio.pictureURL);

// Example of appending object properties to the html
// $("#main").append(bio.skills);
// $("#main").append(bio.role);
// $("#main").append(bio.name);
// $("#main").append(bio.employment);
// $("#main").append(bio.school);
// $("#main").append(education.name);
// $("#main").append(work.lastEmployer);


//format name and role and append to header
var formattedName = HTMLheaderName.replace('%data%', bio.name);
$("#header").append(formattedName);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
$("#header").append(formattedRole);
// TODO bioPic url is creating an error - sort it out.
// var formattedBioPic = HTMLbioPic.replace('%data', bio.bioPic);
// $("#header").append(formattedBioPic);

//format and append contact info
var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
$('#topContacts').append(formattedMobile);
var formattedEmail = HTMLmobile.replace('%data%', bio.contacts.email);
$('#topContacts').append(formattedEmail);
var formattedGitHub = HTMLmobile.replace('%data%', bio.contacts.GitHub);
$('#topContacts').append(formattedGitHub);
var formattedWebSite = HTMLwebSite.replace('%data%', bio.contacts.webSite);
$('#topContacts').append(formattedWebSite);
var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
$('#topContacts').append(formattedLocation);





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
} 


// function to format and display work properties
function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}	
}

displayWork();


//logs where the user clicks on the page using a J-Query event object (loc)
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});


// internationalize Button
$("#main").append(internationalizeButton);
function inName(name) {
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
			  name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
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
		var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].image);
		$(".project-entry:last").append(formattedImage);	
	}
} 

projects.display();

// Appends map
$("#mapDiv").append(googleMap);









