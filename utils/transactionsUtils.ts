export function spentEarned(amounts:string[])
{
    let spend =0;
    let earnedAmmount =0;

    amounts.forEach(amount => {

        const value = Number(amount
                      .replace("USD", "")
                      .replace(/,/g, "")
                      .replace(/\s+/g, ""));

            if(value<0)
            {
                 spend += Math.abs(value);
            }
            else {
            earnedAmmount += value;
        }

        });

        return {
                
                spend,
                earnedAmmount
        };
    
    

    
}