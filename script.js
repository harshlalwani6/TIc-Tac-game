var count=0;
var flag=0;
var arr=  new Array(3);
arr[0] =   new Array(3);
arr[1] = new Array(3);
arr[2] = new Array(3);
var tran = new Array(3);;
tran[0] =   new Array(3);
tran[1] = new Array(3);
tran[2] = new Array(3);
var win =  document.getElementById("win");
var layer =  document.getElementById("Layer");
var container =  document.getElementById("Container");
var img = document.getElementById("myimage")
function checkrow(a)
{
   
    for(row of a)
    {
        checkx =0;
        checko  =0;
        for(element of row)
        {

            if(element=='X') checkx++;
            if(element=='O') checko++;
    
        }
        if(checkx==3)
        {
            win.innerText = "X win the game"
            container.style.visibility="hidden";
            layer.style.visibility ="visible"
            flag=1;
        
        }
        if(checko ==3)
            {
                win.innerText = "O win the game"
                container.style.visibility="hidden";
                layer.style.visibility ="visible"
                flag=1;
            
            }
    }
}
function trans()
{
  
    var  k=0;
    var m=0;
    for( i=0; i<3;i++)
    {
        m=0;
        for(j=0;j<3;j++)
        {
            tran[k][m] =  arr[j][i];
            
            
            m++;
        }
        k++;
    }

}
function diagonal()
{
    let checkx1 =0;
    let  checko1  =0;
    let checkx2 =0;
    let  checko2  =0;
    for( i=0; i<3;i++)
        {
            
   
            for(j=0;j<3;j++)
            {
                element = arr[i][j];
                if(element=='X'  && i==j ) checkx1++;
                if(element=='X'  && i+j==2) checkx2++;
                if(element=='O' && i==j ) checko1++;
                if(element=='O' &&  i+j==2) checko2++;
            }
        
        } 
        if(checkx1==3|| checkx2==3)
            {
                win.innerText = "X win the game"
                container.style.visibility="hidden";
                layer.style.visibility ="visible"
                flag=1;
            
            }
            if(checko1 ==3 || checko2 ==3)
                {
                    win.innerText = "O win the game"
                    container.style.visibility="hidden";
                    layer.style.visibility ="visible"
                    flag=1;
                
                }
            
}
function show(element)
{
    count++;
    if(count%2!=0)  
    {
        element.innerText ='X'; 
        let row = element.id.charAt(0);
        let col =  element.id.charAt(1);
        arr[row][col] = 'X';
    }
    else
    {
        element.innerText ='O'; 
        let row = element.id.charAt(0);
        let col =  element.id.charAt(1);
        arr[row][col] = 'O';
    }
    element.disabled = true;
  
    if(count>=5)
    {
        checkrow(arr);
        trans();
        checkrow(tran);
        diagonal(arr);
    }
    if(count==9 && flag==0)
    {
        img.src= "boy.png";
         container.style.visibility="hidden";
                layer.style.visibility ="visible"
    }

    
}
function reloadpage()
{
    location.reload();
}
