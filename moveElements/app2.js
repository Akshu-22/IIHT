const arr1=[3, 'a', 'a', 'a', 2, 3, 'a','a', 3, 'a', 2,'a', 4, 9, 3];
let Max_fre = 1;
let count = 0;
let item;
for (let i=0; i<arr1.length; i++)
{
        for (let j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 count++;
                if (Max_fre<count)
                {
                  Max_fre=count; 
                  item = arr1[i];
                }
        }
        count=0;
}
console.log(`${item} : ${Max_fre}  `) ;