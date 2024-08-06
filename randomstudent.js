const studentArr = ['Abbas Akbar', 'Abhinav sharma', 'Abhishek Bansal ', 'Abhishek Srivastava', 'Aditya Kumar Singh ', 'Ali Sher Khan', 'Ananya Lamba', 'Anjali Debnath', 'Ankit Saini', 'Anoushka gautam', 'Ansh Kumar Gupta', 'Anshika Bhatnagar ', 'Anuj Chauhan ', 'Anurag Saini', 'Arin Saxena', 'Ashish Ansh', 'Avni saxena', 'Divyanshi Vishnoi ', 'Inayat Ullah Khan', 'Kratika Agarwal', 'Manish Kumar', 'Manit rastogi ', 'Nikita Rathore', 'Prakhar Sharma ', 'Prakriti Gupta', 'Pranjal Agarwal', 'Prince Saxena ', 'Sakshi Chauhan', 'Samarth Rastogi', 'Samra Rubab ', 'Sandeep Kumar', 'Sarthak rastogi', 'Shashank johri', 'Shashwat Tewari', 'Shivam Prajapati', 'Shivi Agarwal', 'Shrey Singhal', 'Sohil Ansari', 'Tahir Ali', 'Tahzeeb Malik ', 'Tanu Saini', 'Vishal kumar', 'Pratham Gupta'];

const exclusionList = ['Pratham Gupta'];


function getRandomStudent(arr, exclusionList) {
    const availableStudents = arr.filter(student => !exclusionList.includes(student));
    if (availableStudents.length === 0) {
        return "No students available for selection.";
    }
    const randomIndex = Math.floor(Math.random() * availableStudents.length);
    return availableStudents[randomIndex];
}

function printCharacterByCharacter(text, index = 0) {
    if (index < text.length) {
        process.stdout.write(text[index]);
        setTimeout(() => printCharacterByCharacter(text, index + 1), 500);
    } else {
        console.log(); // Move to the next line after printing all characters
    }
}

function displayRandomStudent(arr, exclusionList) {
    console.log("Selecting a random student...");

    setTimeout(() => {
        console.log("3...");
        setTimeout(() => {
            console.log("2...");
            setTimeout(() => {
                console.log("1...");
                setTimeout(() => {
                    const randomStudent = getRandomStudent(arr, exclusionList);
                    console.log("Randomly selected student: ");
                    printCharacterByCharacter(randomStudent);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

displayRandomStudent(studentArr, exclusionList);