function grading(grade){
    const multiple = [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];

    for (i of multiple){
        if(grade <= i){
            const subtract = i - grade;

            if(subtract < 3){
                const final = grade + subtract;
                return final;
            }else if(subtract >= 3 || subtract < 40){
                return grade;
            }
        }
    }
}

function gradings(grades){
    const multiple = [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
    const result = [];

    for (let grade of grades){
        total(grade);
    }

    function total(grade){
        for (let i of multiple){
            if (grade <= i){
                const subtract = i - grade;

                if(subtract < 3){
                    const final = grade + subtract;
                    result.push(final);
                    break;
                }else if(subtract >= 3 || subtract < 40){
                    result.push(grade);
                    break;
                }
            }
        }
    }

    return result;
}

// [4, 73, 67, 38, 33]
console.log(gradings([73, 67, 38, 33]));