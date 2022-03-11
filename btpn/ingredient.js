function cook(recipe, ingredients) {
    
    //check
    let recipes = recipe.split('');
    let newArr = ingredients.split('');
    let len = newArr.length;

    for(let i = 0; i < len; i++){
        if(newArr[i] === recipes[i]){
            continue;
        }else{
            return 0;
        }
    }

    let howMany = [];
    for(let j = 0; j < recipes; j++){
        for(let k = 1; k < recipes; k++){
            if(k <= j){
                k++;
            }else{
                if(recipes[j] == recipes[k]){
                    howMany[j] += 1;
                }
            }
        }
    }
}