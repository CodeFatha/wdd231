const logo = document.querySelector('.brand');
const allBtn = document.querySelector('.btn-all');
const cseBtn = document.querySelector('.btn-cse');
const wddBtn = document.querySelector('.btn-wdd');
const container = document.querySelector('.modules');
const credits = document.querySelector('.credits');

const courses = [
    {
        'name': 'CSE210',
        'description': 'Semi-advanced Programming',
        'credits': 3,
        'completed': false
    },
    {
        'name': 'CSE110',
        'description': 'Introduction to Computer Science',
        'credits': 2,       
        'completed': true
    },
    {
        'name': 'CSE111',
        'description': 'intermediate Programming',
        'credits': 2,
        'completed': false
    },
    {
        'name': 'WDD131',
        'description': 'Web Fundamentals',
        'credits': 2,
        'completed': true
    },
    {
        'name': 'WDD231',
        'description': 'Intermediate Web Development',
        'credits': 3,
        'completed': false
    }
]

displayCourses(courses);
cseBtn.addEventListener('click', cseCourses);
wddBtn.addEventListener('click', wddCourses);
allBtn.addEventListener('click', allCourses);

function displayCourses(list) {
    list.forEach(course => {
        const div = document.createElement('div');
        const p = document.createElement('p');
        const check = document.createElement('span');
        check.innerHTML = '✓';
        check.style.color = 'white';
        p.innerHTML = `${course.name}`;

        if ( course.completed ) {
          div.appendChild(check);  
          div.style.backgroundColor = 'darkgreen';
        }
        div.appendChild(p);
        div.style.textAlign = 'center';
        container.appendChild(div);
    });
    getCredits(list);
}

function getCredits(courses) {
    let totalCredits = 0;
    courses.reduce((acc, course) => {
            totalCredits += course.credits;
        return acc;
    }, 0);
    credits.innerHTML = `Total Credits: ${totalCredits}`;
    credits.style.textAlign = 'center';
    credits.style.fontSize = '1rem';
    credits.style.fontWeight = 'bold';
}


function cseCourses() {
    container.innerHTML = '';
    list = courses.filter(course => {
        const courseName = course.name.toLowerCase();
        return courseName.includes('cse'); 
    });

    displayCourses(list);
}
function wddCourses() {
    container.innerHTML = '';
    list = courses.filter(course => {
        const courseName = course.name.toLowerCase();
        return courseName.includes('wdd'); 
    });

    displayCourses(list);
}

function allCourses() {
    container.innerHTML = '';
    displayCourses(courses);
}
