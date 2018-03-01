let res = prompt('Voer het resultaat in (%):')

if(res<=50)
{
document.write('zeer slecht gepresteerd')
}

else if(res<68)
{
document.write('op voldoende wijze')
}

else if(res<77)
{
document.write('onderscheiding')
}

else if(res<85)
{
document.write('grote onderscheiding')
}

else if(res<90)
{
document.write('grootste onderscheiding')
}

else
{
document.write('grootste onderscheiding')
alert('Een dikke proficiat met je resultaten van de examencommissie!')
}