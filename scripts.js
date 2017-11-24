var menuItems = new Array("graphic design", "web design", "exhibit design", "fine art", "resume", "@");
var itemSelected = 0;
function createMenu(id)
{
	itemSelected = 0;

	document.writeln('<table cellspacing="0" cellpadding="0">');
	for(var i = 1; i <= menuItems.length; i++)
	{
		document.writeln('\t<tr valign="bottom">');
		document.write('\t\t<td height="15">');
		if( i != id )
			document.write('<a href="javascript:selectMenuItem(' + i + ');" class="menu_link">' + menuItems[i-1] + '</a>');
		else
			document.write('<span class="menu_link_selected">&nbsp;&nbsp;' + menuItems[i-1] + '</span>');
		document.writeln('</td>');
		document.writeln('</tr>');
	}
	document.writeln('</table>');
}

function selectMenuItem(id)
{
	if( id == itemSelected )
		return;

	switch( id )
	{
		case 1: // graphic design
			itemSelected = id;
			location.replace("../gd/bottom.htm");
			parent.middle.location.replace("../gd/middle.htm");
			break;
		case 2: // web design
			itemSelected = id;
			location.replace("../wd/bottom.htm");
			parent.middle.location.replace("../wd/middle.htm");
			break;
		case 3: // exhibit design
			itemSelected = id;
			location.replace("../ed/bottom.htm");
			parent.middle.location.replace("../ed/middle.htm");
			break;
		case 4: // fine art
			itemSelected = id;
			location.replace("../fa/bottom.htm");
			parent.middle.location.replace("../fa/middle.htm");
			break;
		case 5: // resume
			itemSelected = 0;
			window.open("../resume/resume.htm", "resume", "dependent,resizable,scrollbars"); 
			break;
		case 6: // email
			itemSelected = 0;
			window.open("mailto:Katerina Shahpazova <shahpazova@yahoo.com>");
			break;
		default:
			itemSelected = 0;
			break;
	}
}

function createSlideTable(rows, cols)
{
	for(var i = 0; i < rows; i++)
	{
		document.writeln('<tr valign="bottom">');
		for(var j = 0; j < cols; j++)
		{
			document.write('\t<td width="40" height="20" class="border_black">');
			var k = cols*i + j;
			if( k < slides[0].length )
				document.write('<a href="javascript:selectSlide(' + (k+1) + ')"><img src="img/icons/' + slides[1][k] + '" width="40" height="20" border="0"/></a>');
			else
				document.write('&nbsp;');
			document.writeln('</td>');
			document.writeln('\t<td width="15" height="20"></td>');
		}
		document.writeln('</tr>');
		document.writeln('<tr valign="bottom">');
		document.writeln('\t<td height="10" colspan="8"></td>');
		document.writeln('</tr>');
	}
}

function selectSlide(id)
{
	if( id <= slides[0].length )
	{
		parent.middle.document.small.src = "img/small/" + slides[2][id-1];
		if (slides[3][id-1] == null || slides[3][id-1].length == 0)
			parent.middle.document.formHidden.big.value = "";
		else
			parent.middle.document.formHidden.big.value = "img/big/" + slides[3][id-1];
		parent.middle.document.all["tag"].innerText = slides[0][id-1];
 	}
}

function openBig()
{
	if (window.document.formHidden.big.value.length == 0)
		return;

	var image = new Image();
	image.src = window.document.formHidden.big.value;

	window.open('big.htm', 'big', 'dependent,menubar=no,titlebar=no,toolbar=no,status=no,width=150,height=150');// + ',resizable');
}
