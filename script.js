document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger, Draggable, ScrollToPlugin);

    // Excluding #drag0 from the general draggable setup
    const draggables = document.querySelectorAll('.draggable:not(#drag0)');
    
    Draggable.create(draggables, {
        bounds: "#container",
        zIndexBoost: false
    });

    // Specifically targeting #drag0 for independent positioning
    const drag0 = document.querySelector('#drag0');
    if(drag0) {
        Draggable.create(drag0, {
            bounds: "#container",
            zIndexBoost: false
        });
        // Positioning #drag0 at the top right corner of #container
        drag0.style.position = "absolute";
        drag0.style.right = "2vw";
        drag0.style.top = "4vh";
    }

    // Setup to scroll to the #sections div upon clicking the .scroll_down div
   document.querySelector(".scroll_down").addEventListener("click", function() {
        // Calculate the target scroll position
        // Get the top position of #sections and subtract 10vh from it
        const sectionsTop = document.querySelector("#sections").getBoundingClientRect().top;
        const offset = window.innerHeight * 0.1; // 10vh
        const targetScrollPos = window.scrollY + sectionsTop - offset;

        gsap.to(window, {duration: 1, scrollTo: targetScrollPos});
    });





let initialPauseEnd = 0.2;
let middlePauseStart = 0.4, middlePauseEnd = 0.6;
let finalPauseStart = 0.8;


 
    ScrollTrigger.create({
        trigger: ".pin-container",
        start: "top 10%", 
        end: "bottom top",
        pin: true,
        scrub: 2,
        markers: false,
        onUpdate: (self) => {
            let progress = self.progress;
            let adjustedProgress;

            if (progress < initialPauseEnd) return; // Initial pause
            else if (progress >= initialPauseEnd && progress < middlePauseStart) {
                adjustedProgress = (progress - initialPauseEnd) / (middlePauseStart - initialPauseEnd) * 0.5;
            } else if (progress >= middlePauseStart && progress < middlePauseEnd) {
                adjustedProgress = 0.5; // Middle pause
                return;
            } else if (progress >= middlePauseEnd && progress < finalPauseStart) {
                // No additional calculations needed here
            } else if (progress >= finalPauseStart) return; // Final pause

            if (progress >= middlePauseEnd && progress < finalPauseStart) {
                let postPauseProgress = (progress - middlePauseEnd) / (finalPauseStart - middlePauseEnd);
                adjustedProgress = 0.5 + postPauseProgress * 0.5;
            }

           
            let firstDivHeight = adjustedProgress <= 0.5 ? 70 - 60 * adjustedProgress * 2 : 10;
            let secondDivHeight = adjustedProgress <= 0.5 ? 10 + 60 * adjustedProgress * 2 : 70 - 60 * (adjustedProgress - 0.5) * 2;
            let thirdDivHeight = adjustedProgress > 0.5 ? 10 + 60 * (adjustedProgress - 0.5) * 2 : 10;

            gsap.to("#image1", {height: `${firstDivHeight}vh`, ease: "none"});
            gsap.to("#image2", {height: `${secondDivHeight}vh`, ease: "none"});
            gsap.to("#image3", {height: `${thirdDivHeight}vh`, ease: "none"});
        }
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const updateLayout = () => {
        // Adjust verticalGap and topPosition calculation based on screen width
        let verticalGap;
        let topPositionMultiplier;
        if (window.innerWidth < 601) {
            verticalGap = 4; // Smaller gap for very small screens
            topPositionMultiplier = 4; // Closer top positioning for smaller screens
        } else if (window.innerWidth < 993) {
            verticalGap = 6; // Medium gap for medium screens
            topPositionMultiplier = 4; // Medium distance top positioning for medium screens
        } else {
            verticalGap = 12; // Default gap for large screens
            topPositionMultiplier = 2.5; // Default distance top positioning for large screens
        }
        
        const draggables = document.querySelectorAll('.draggable:not(#drag0)');
        const itemsPerRow = [10, 10, 1];
        const horizontalGap = 0.5;
        const itemWidth = 7.8;
        const itemHeight = 10.3;

        let rowIndex = 0;
        let itemIndexInRow = 0;

        draggables.forEach((draggable, index) => {
            if (index > 0 && itemIndexInRow >= itemsPerRow[rowIndex]) {
                rowIndex += 1;
                itemIndexInRow = 0;
                if (rowIndex >= itemsPerRow.length) {
                    rowIndex = 0;
                }
            }
            let leftPosition = (horizontalGap * 6) + (itemIndexInRow * (itemWidth + horizontalGap));
            // Updated topPosition calculation
            let topPosition = (verticalGap * topPositionMultiplier) + (rowIndex * (itemHeight + verticalGap));

            draggable.style.left = `${leftPosition}vw`;
            draggable.style.top = `${topPosition}vh`;

            itemIndexInRow += 1;
        });
    };

    // Listen for window resize events to adjust layout as needed
    window.addEventListener('resize', updateLayout);

    // Initial layout setup
    updateLayout();
});





document.getElementById("dropdown-word1").addEventListener("click", function() {
    var dropdownText = document.getElementById("dropdown-text1");
    if (dropdownText.classList.contains("hidden")) {
        dropdownText.classList.remove("hidden");
    } else {
        dropdownText.classList.add("hidden");
    }
});


document.getElementById("dropdown-word").addEventListener("click", function() {
    var dropdownText = document.getElementById("dropdown-text");
    if (dropdownText.classList.contains("hidden")) {
        dropdownText.classList.remove("hidden");
    } else {
        dropdownText.classList.add("hidden");
    }
});


document.getElementById("dropdown-word2").addEventListener("click", function() {
    var dropdownText = document.getElementById("dropdown-text2");
    if (dropdownText.classList.contains("hidden")) {
        dropdownText.classList.remove("hidden");
    } else {
        dropdownText.classList.add("hidden");
    }
});


document.getElementById("dropdown-word3").addEventListener("click", function() {
    var dropdownText = document.getElementById("dropdown-text3");
    if (dropdownText.classList.contains("hidden")) {
        dropdownText.classList.remove("hidden");
    } else {
        dropdownText.classList.add("hidden");
    }
});


document.getElementById("dropdown-word4").addEventListener("click", function() {
    var dropdownText = document.getElementById("dropdown-text4");
    if (dropdownText.classList.contains("hidden")) {
        dropdownText.classList.remove("hidden");
    } else {
        dropdownText.classList.add("hidden");
    }
});


document.getElementById("dropdown-word5").addEventListener("click", function() {
    var dropdownText = document.getElementById("dropdown-text5");
    if (dropdownText.classList.contains("hidden")) {
        dropdownText.classList.remove("hidden");
    } else {
        dropdownText.classList.add("hidden");
    }
});


document.getElementById("dropdown-word6").addEventListener("click", function() {
    var dropdownText = document.getElementById("dropdown-text6");
    if (dropdownText.classList.contains("hidden")) {
        dropdownText.classList.remove("hidden");
    } else {
        dropdownText.classList.add("hidden");
    }
});


document.getElementById("dropdown-word7").addEventListener("click", function() {
    var dropdownText = document.getElementById("dropdown-text7");
    if (dropdownText.classList.contains("hidden")) {
        dropdownText.classList.remove("hidden");
    } else {
        dropdownText.classList.add("hidden");
    }
});
