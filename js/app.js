
/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 **/
 const navElements = new Array() ;
const navList = document.getElementById('navbar__list') ;
const fragment = document.createDocumentFragment();
const sections = document.body.querySelectorAll('section');
let y = 0, checkElement ;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
 
function check(evt) {
    evt.preventDefault();      /* prevent default responce */

    sections.forEach( function(section) {
        const info = section.getBoundingClientRect();
        y = info.top ;

        if(y>=-150 && y<=450) {
            setTimeout( function() {
                checkElement = section.id ; 
            }, 250 );
        }
    } );
    
    sections.forEach(function(section, index) {
        if(section.id !== checkElement ) {
            section.classList.remove("your-active-class");   
            navElements[index].classList.remove( "Active_Section" );         
        }
        else {
            section.classList.add("your-active-class");
            navElements[index].classList.add( "Active_Section" ); 
        }
        
    });

}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav and Scroll to anchor ID using scrollTO event
sections.forEach(function(section, index) {
    const newLi = document.createElement('li');
    const newAnchor = document.createElement('a');
    const attribute = section.getAttribute('data-nav');
    newAnchor.textContent = attribute ;
    newAnchor.classList.add("menu__link");
    newAnchor.setAttribute('data-nav',attribute ) ;
    
    newAnchor.addEventListener('click', function scrollToTarget() {
        sections[index].scrollIntoView({'behavior':'smooth'});
    });

    navElements[index] = newAnchor ;

    newLi.appendChild(newAnchor);
    fragment.appendChild(newLi);
} );

navList.appendChild(fragment);

// Add class 'active' to section when near top of viewport

    window.addEventListener('scroll', check, false)

/**
 * End Main Functions
 * Begin Events
 * 
*/
