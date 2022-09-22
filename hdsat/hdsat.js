//  ---------------------------------------------------------------------
//  author, in full extend of this work: https://github.com/access-excess
//         first published: 17-7-2022, latest versioned: 22-9-2022
//               license: https://spdx.org/licenses/MIT.html
//  ---------------------------------------------------------------------


function M2(divM2, divM2S13, divM2S13S21, divM2S13S22) {
   dM2=document.getElementById(divM2)
   dM2S13=document.getElementById(divM2S13)
   dM2S13S21=document.getElementById(divM2S13S21)
   dM2S13S22=document.getElementById(divM2S13S22)
   if(dM2.style.display=='none') {
      dM2.style.display='block'
      document.getElementById('m1').style.color='blue'
      document.getElementById('m2').style.color='fuchsia'
      document.getElementById('m3').style.color='blue'
      document.getElementById('m4').style.color='blue'
   }
   else {
      dM2.style.display='none'
      dM2S13.style.display='none'
      dM2S13S21.style.display='none'
      dM2S13S22.style.display='none'
      document.getElementById('m2').style.color='blue'
   }
}

function M2S13(divM2S13, divM2S13S21, divM2S13S22) {
   dM2S13=document.getElementById(divM2S13)
   dM2S13S21=document.getElementById(divM2S13S21)
   dM2S13S22=document.getElementById(divM2S13S22)
   if(dM2S13.style.display=='none') {
      dM2S13.style.display='block'
      document.getElementById('M2s11').style.color='blue'
      document.getElementById('M2s12').style.color='blue'
      document.getElementById('M2S13').style.color='fuchsia'
   }
   else {
      dM2S13.style.display='none'
      dM2S13S21.style.display='none'
      dM2S13S22.style.display='none'
      document.getElementById('M2S13').style.color='blue'
   }
}

function M2S13S21(divM2S13S21, divM2S13S22) {
   dM2S13S21=document.getElementById(divM2S13S21)
   dM2S13S22=document.getElementById(divM2S13S22)
   if(dM2S13S21.style.display=='none') {
      dM2S13S21.style.display='block'
      dM2S13S22.style.display='none'
      document.getElementById('M2S13S21').style.color='fuchsia'
      document.getElementById('M2S13S22').style.color='blue'
   }
   else {
      dM2S13S21.style.display='none'
      document.getElementById('M2S13S21').style.color='blue'
   }
}

function M2S13S22(divM2S13S21, divM2S13S22) {
   dM2S13S21=document.getElementById(divM2S13S21)
   dM2S13S22=document.getElementById(divM2S13S22)
   if(dM2S13S22.style.display=='none') {
      dM2S13S22.style.display='block'
      dM2S13S21.style.display='none'
      document.getElementById('M2S13S21').style.color='blue'
      document.getElementById('M2S13S22').style.color='fuchsia'
   }
   else {
      dM2S13S22.style.display='none'
      document.getElementById('M2S13S22').style.color='blue'
   }
}

// IN THE MODE "TARGET ALTERNATED" THE FUNCTIONS Tar MUST BE KEPT
// IN THE MODE "TARGET NON ALTERNATED" THE FUNCTIONS Tar MAY BE KEPT

function TarM2S13S21Alt1(divM2S13S21Alt1, divM2S13S21Alt2) {
   dM2S13S21Alt1=document.getElementById(divM2S13S21Alt1)
   dM2S13S21Alt2=document.getElementById(divM2S13S21Alt2)
   if(dM2S13S21Alt1.style.display=='none') {
      dM2S13S21Alt1.style.display='block'
      dM2S13S21Alt2.style.display='none'
      document.getElementById('tarM2S13S21Alt1').style.color='black'
      document.getElementById('tarM2S13S21Alt2').style.color='white'
      dM2S13S21AltsOff.style.display='none'
      sM2S13S21AltsOff.style.display='none'
   }
   else {
      dM2S13S21Alt1.style.display='none'
      document.getElementById('tarM2S13S21Alt1').style.color='white'
      dM2S13S21AltsOff.style.display='block'
      sM2S13S21AltsOff.style.display='block'
   }
}

function TarM2S13S21Alt2(divM2S13S21Alt1, divM2S13S21Alt2) {
   dM2S13S21Alt1=document.getElementById(divM2S13S21Alt1)
   dM2S13S21Alt2=document.getElementById(divM2S13S21Alt2)
   if(dM2S13S21Alt2.style.display=='none') {
      dM2S13S21Alt2.style.display='block'
      dM2S13S21Alt1.style.display='none'
      document.getElementById('tarM2S13S21Alt1').style.color='white'
      document.getElementById('tarM2S13S21Alt2').style.color='black'
      dM2S13S21AltsOff.style.display='none'
      sM2S13S21AltsOff.style.display='none'
   }
   else {
      dM2S13S21Alt2.style.display='none'
      document.getElementById('tarM2S13S21Alt2').style.color='white'
      dM2S13S21AltsOff.style.display='block'
      sM2S13S21AltsOff.style.display='block'
   }
}

function TarM2S13S22Alt1(divM2S13S22Alt1, divM2S13S22Alt2) {
   dM2S13S22Alt1=document.getElementById(divM2S13S22Alt1)
   dM2S13S22Alt2=document.getElementById(divM2S13S22Alt2)
   if(dM2S13S22Alt1.style.display=='none') {
      dM2S13S22Alt1.style.display='block'
      dM2S13S22Alt2.style.display='none'
      document.getElementById('tarM2S13S22Alt1').style.color='black'
      document.getElementById('tarM2S13S22Alt2').style.color='white'
      dM2S13S22AltsOff.style.display='none'
      sM2S13S22AltsOff.style.display='none'
   }
   else {
      dM2S13S22Alt1.style.display='none'
      document.getElementById('tarM2S13S22Alt1').style.color='white'
      dM2S13S22AltsOff.style.display='block'
      sM2S13S22AltsOff.style.display='block'
   }
}

function TarM2S13S22Alt2(divM2S13S22Alt1, divM2S13S22Alt2) {
   dM2S13S22Alt1=document.getElementById(divM2S13S22Alt1)
   dM2S13S22Alt2=document.getElementById(divM2S13S22Alt2)
   if(dM2S13S22Alt2.style.display=='none') {
      dM2S13S22Alt2.style.display='block'
      dM2S13S22Alt1.style.display='none'
      document.getElementById('tarM2S13S22Alt1').style.color='white'
      document.getElementById('tarM2S13S22Alt2').style.color='black'
      dM2S13S22AltsOff.style.display='none'
      sM2S13S22AltsOff.style.display='none'
   }
   else {
      dM2S13S22Alt2.style.display='none'
      document.getElementById('tarM2S13S22Alt2').style.color='white'
      dM2S13S22AltsOff.style.display='block'
      sM2S13S22AltsOff.style.display='block'
   }
}
