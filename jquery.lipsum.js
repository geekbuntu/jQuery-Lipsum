/* jQuery Lipsum 0.1 by Jamie McElwain
 * 
 * Copyright (c) 2010 Jamie McElwain
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
jQuery.fn.lipsum = function(paragraphs){
	var lorem = new Array(10);
	lorem[1] ="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor semper mi, vel tempus massa feugiat nec. Cras varius, nunc in imperdiet fringilla, libero nisl sagittis nisl, mattis tempus sapien turpis at nisl. Nunc urna magna, ullamcorper eget cursus eu, mattis non lorem. Integer semper, lorem eget placerat lobortis, diam velit faucibus velit, eget suscipit urna sapien nec mi. Aliquam ultricies odio enim, vel consequat sem. In gravida ultricies dignissim. Sed sit amet enim mi. Morbi rutrum luctus dui, a eleifend mauris ultricies id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi non dui purus, a suscipit sapien. Phasellus eu nibh est. Duis elit sem, tempus adipiscing interdum ullamcorper, ullamcorper ac dui. Praesent eget mauris eu odio tempor porttitor."; 
	lorem[2] ="<p>Proin sollicitudin tellus et erat suscipit nec elementum elit eleifend. Nullam ut varius lorem. Curabitur sollicitudin purus sed nisi gravida sit amet auctor tortor suscipit. Curabitur consequat varius condimentum. Nullam euismod sapien at quam laoreet ut accumsan nisi semper. Nulla facilisi. Nullam porttitor posuere urna eget commodo. Curabitur feugiat sodales nulla in volutpat. Nulla non neque nec neque accumsan aliquet vel id elit. Proin auctor fringilla risus vitae porttitor. Quisque viverra rhoncus gravida. Vivamus pretium porttitor dignissim. Fusce neque turpis, fringilla a semper nec, rhoncus sit amet eros.</p>";
	lorem[3] ="<p>Vestibulum cursus feugiat posuere. Suspendisse facilisis libero a tellus placerat interdum. Praesent risus elit, mattis quis bibendum non, luctus a augue. Sed eu nibh hendrerit massa viverra porttitor. Vestibulum condimentum vulputate dui viverra lobortis. Praesent at quam justo. Nullam tincidunt, lacus vitae lacinia congue, odio neque accumsan quam, nec dignissim risus purus sit amet odio. Donec placerat, lorem vitae bibendum bibendum, lorem metus venenatis felis, nec lacinia leo ante ut ipsum. Integer vitae velit nunc, at dictum eros. Maecenas ac metus arcu. Suspendisse dolor erat, pharetra et blandit nec, egestas in nisi. Nulla in tortor et ligula malesuada imperdiet. Proin et mi in eros facilisis sagittis dignissim suscipit nisi. Integer tempus rutrum volutpat. Donec lobortis egestas justo sit amet vehicula.</p>";
	lorem[4] ="<p>Morbi vestibulum est vel risus blandit egestas ac sed lorem. Cras adipiscing interdum ullamcorper. Vivamus mollis mi vel mauris lacinia sit amet auctor lectus lacinia. Integer viverra libero non velit luctus fermentum. Proin in libero nunc. Donec placerat elementum felis in dignissim. Fusce porttitor, massa quis feugiat convallis, lacus neque fringilla nisi, vitae lobortis erat nisi ut ante. Praesent accumsan accumsan tristique. Integer nec nulla id libero hendrerit convallis vitae et leo. Mauris aliquam tortor diam, a egestas dolor. Phasellus suscipit lorem ut lorem ultricies sit amet bibendum sapien aliquam.</p>"; 
	lorem[5] ="<p>Curabitur molestie placerat neque vitae consequat. Sed sed elit tellus, sed ultricies nibh. Maecenas arcu mauris, faucibus id tempus non, ornare vitae turpis. Vestibulum id quam nisi. Ut laoreet ligula at enim aliquet adipiscing. Suspendisse sit amet dui ac felis consequat volutpat. Cras condimentum, est non ullamcorper sollicitudin, elit orci pharetra mauris, et pretium risus nunc nec diam. Quisque dignissim volutpat faucibus. Nam eu orci id justo molestie volutpat. Morbi tristique quam id odio semper non hendrerit eros ornare. Mauris euismod placerat orci eu posuere. Fusce rutrum bibendum commodo. Praesent sed semper elit. Ut ac ligula libero, vitae feugiat lectus.</p>"; 
	lorem[6] ="<p>Vestibulum enim nisl, gravida at vestibulum eget, varius vel elit. Vivamus pulvinar, purus at vestibulum auctor, nulla ante egestas mi, a semper massa dolor vitae urna. Ut sed velit at nulla ornare dapibus. Aliquam erat volutpat. Cras mollis pulvinar nisl, eget adipiscing arcu semper sed. Ut ultrices felis sed odio semper lacinia at sed magna. Nunc eu auctor lorem. Suspendisse vehicula augue vel justo dignissim faucibus. Etiam gravida elit eget sapien condimentum tristique. Nunc condimentum diam nec nisi tempus tristique. Morbi consequat sem a eros gravida eu suscipit libero tempor. Integer sodales nibh sit amet enim vehicula viverra. Sed porttitor tristique enim, vitae dictum turpis sollicitudin eget. Vestibulum ipsum velit, imperdiet eget rhoncus a, suscipit quis tellus. Pellentesque pulvinar augue non est lobortis porta quis sit amet libero. Vivamus nec ultricies leo. Suspendisse molestie iaculis urna, eu auctor lorem feugiat eu. Nulla facilisis elementum felis vulputate luctus. Mauris eros velit, adipiscing at gravida eu, scelerisque eu mi. Morbi sagittis, nibh a dapibus aliquam, magna ligula blandit eros, sit amet pulvinar neque massa nec ligula.</p>"; 
	lorem[7] ="<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras turpis odio, mattis sit amet scelerisque a, interdum vel odio. Pellentesque vel dignissim nulla. Donec vestibulum risus eu massa vestibulum fermentum. Suspendisse arcu magna, varius et lacinia non, imperdiet cursus ligula. Praesent id turpis faucibus nunc pellentesque sodales blandit vitae libero. Ut vel lacus ante. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam vitae commodo est. Maecenas non lacus tortor, vitae aliquam libero. Donec elit est, consectetur eu hendrerit eu, iaculis ut velit. Etiam sodales nisl quis velit adipiscing ut vulputate nisi rutrum.</p>"; 
	lorem[8] ="<p>In hac habitasse platea dictumst. Vivamus laoreet porttitor elit, sed tincidunt urna ullamcorper ut. Maecenas bibendum venenatis pellentesque. Fusce ac nisl nec erat cursus laoreet at in lorem. Vestibulum quis eros ac lorem bibendum venenatis non a sem. Nulla cursus magna ac lectus facilisis ac vestibulum nunc aliquam. Nunc vel purus pretium leo auctor porttitor. Duis ullamcorper mi vel erat mollis pulvinar. Quisque sodales sagittis dui nec vulputate. Morbi scelerisque, metus eu cursus pellentesque, est tortor suscipit nisi, non tristique neque ligula a turpis. Pellentesque at urna nunc, vitae euismod dui. Cras ullamcorper nunc vel quam placerat ultricies. Nulla eget dui in leo feugiat rutrum sed eu risus. Quisque sit amet urna nibh, vel elementum massa. Donec dolor metus, sodales nec molestie sit amet, lacinia sed nisl.</p>";
	lorem[9] ="<p>Maecenas a dolor nulla. Cras fringilla arcu at lorem condimentum aliquam. Pellentesque nec nulla nec mauris malesuada imperdiet. Donec vitae purus elit, non commodo magna. Aliquam et dui diam. Sed varius metus sit amet justo posuere pellentesque a semper nisl. Vestibulum a augue urna. Nunc risus odio, venenatis ac ullamcorper nec, auctor in mi. Donec a massa odio. Maecenas mauris erat, dapibus at convallis sed, viverra in turpis. Nullam blandit egestas neque. Nulla a quam eu nunc porttitor congue. Phasellus iaculis suscipit lacinia. Aliquam eu tortor non elit interdum rutrum id ut nisl. Sed consequat nunc non justo ultrices ullamcorper mattis ante sollicitudin. Suspendisse rutrum orci sit amet tellus vulputate venenatis. Nunc feugiat dolor in ipsum scelerisque at mattis eros pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>";
	lorem[10] ="<p>Praesent fermentum tellus ut nisi sollicitudin malesuada. Suspendisse potenti. Nulla facilisi. Nunc tortor nisi, sagittis id pretium non, lobortis id justo. Quisque accumsan viverra faucibus. Donec non leo libero. Sed sed quam sapien, at fringilla orci. Vivamus quis justo vel risus laoreet pretium. Mauris vulputate facilisis felis sit amet convallis. Duis eu justo gravida erat cursus viverra eu pharetra nulla. Integer adipiscing quam ac urna condimentum placerat. Nam risus leo, aliquet at pellentesque non, bibendum ac justo. Donec consectetur fermentum pulvinar. Aliquam erat odio, commodo nec consequat sit amet, accumsan at metus.</p>";
	if(paragraphs){
		switch (paragraphs){
			case 10:
			lipsum = lorem[1]+lorem[2]+lorem[3]+lorem[4]+lorem[5]+lorem[6]+lorem[7]+lorem[8]+lorem[9]+lorem[10];
			break;
			case 9:
			lipsum = lorem[1]+lorem[2]+lorem[3]+lorem[4]+lorem[5]+lorem[6]+lorem[7]+lorem[8]+lorem[9];
			break;
			case 8:
			lipsum = lorem[1]+lorem[2]+lorem[3]+lorem[4]+lorem[5]+lorem[6]+lorem[7]+lorem[8];
			break;
			case 7:
			lipsum = lorem[1]+lorem[2]+lorem[3]+lorem[4]+lorem[5]+lorem[6]+lorem[7];
			break;
			case 6:
			lipsum = lorem[1]+lorem[2]+lorem[3]+lorem[4]+lorem[5]+lorem[6];
			break;
			case 5:
			lipsum = lorem[1]+lorem[2]+lorem[3]+lorem[4]+lorem[5];
			break;
			case 4:
			lipsum = lorem[1]+lorem[2]+lorem[3]+lorem[4];
			break;
			case 3:
			lipsum = lorem[1]+lorem[2]+lorem[3];
			break;
			case 2:
			lipsum = lorem[1]+lorem[2];;
			break;
			case 1:
			lipsum = lorem[1];
		}
	}
	else {
		var lipsum = lorem[1];
	}
	this.append(lipsum);
	return this;
}