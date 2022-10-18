const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

//Arabic translation for the Hear page
function Arabic1(){
  //We reload the page to go back to english
  if(document.querySelector(".btnAr").innerHTML == "English")
  {
      location.reload()
  }
  //Arabic Translation
  document.querySelector(".btnAr").innerHTML = "English";
  document.querySelector(".translate1").innerHTML = "إسمع";
  document.querySelector(".translate2").innerHTML = "مساعدة السمع";
  //We use a forloop so we do not repeat ourseleves 3 times for each line
  for(let i = 0; i< 2; i++){
    document.getElementsByClassName('translate3')[i].innerHTML = "المطورين";
  }
  //We use a forloop so we do not repeat ourseleves 3 times for each line
  for(let i = 0; i< 4; i++){
    document.getElementsByClassName('translate4')[i].innerHTML = "المعلومات";
  }
  document.querySelector(".translate5").innerHTML = " عما قريب مشاكل العين";
  document.querySelector(".translate6").innerHTML = "تسجيل دخول";
  document.querySelector(".translate7").innerHTML = "تسجيل حساب";
  //We use a forloop so we do not repeat ourseleves 3 times for each line
  for(let i = 0; i< 3; i++){
    document.getElementsByClassName('translate8')[i].innerHTML = "اضغط";
  }
  //We use a forloop so we do not repeat ourseleves 3 times for each line
  for(let i = 0; i< 3; i++){
    document.getElementsByClassName('translate9')[i].innerHTML = "المطور";
  }
  document.querySelector(".translate10").innerHTML = "حمد محمد حمد الجنيبي";
  document.querySelector(".translate11").innerHTML = "عبد الله أسامه عطيه";
  document.querySelector(".translate12").innerHTML = "معاذ اسامه عطيه";
  document.querySelector(".translate13").innerHTML = "فوناك روجر بن";
  document.querySelector(".translateX").innerHTML = "فوناك روجر بنRoger Pen ميكروفون لاسلكي عالمي متطور يساعد الأشخاص الذين يعانون من ضعف السمع على فهم المزيد من الكلام عندما يكونون في ضوضاء وفي بيئات صاخبة والاستماع من مسافة بعيدة.";
  document.querySelector(".translate14").innerHTML = "Oticon Connectclip";
  document.querySelector(".translate15").innerHTML = "يقوم ConnectClip بتحويل Open السمع إلى سماعة رأس لاسلكية عالية الجودة تمكن المستخدم من: إجراء واستقبال مكالمات بدون استخدام اليدين في السيارة أو أثناء التنقل عبر التدفق إلى كلتا الأذنين.";
  document.querySelector(".translate16").innerHTML = " Widex pro";
  document.querySelector(".translate17").innerHTML = "PRO LINK هو جهاز جديد لاسلكي ملائم يجعل الحياة أسهل لك ولعملائك. يمكّنك PRO LINK الجديد من ملاءمة جميع المعينات السمعية من Widex باستخدام برنامج COMPASS GPS موثوق به.";
  document.querySelector(".translate18").innerHTML = "مساعدة السمع";
  document.querySelector(".translate19").innerHTML = "الصفحة الرأيسية";
  document.querySelector(".translate20").innerHTML = "تطبيقات مساعدة";
  document.querySelector(".translate21").innerHTML = "الصفحة الرأيسية";
  //document.querySelector(".translate22").innerHTML = "achromatopsia";
  //document.querySelector(".translate23").innerHTML = "نظارات العين";
  document.querySelector(".translate24").innerHTML = "قم بلأشتراك مع صحيفتنا ";
  document.querySelector(".translate25").innerHTML = "معلومات مشيقة جديدة كل شهر";
  document.querySelector(".translate26").innerHTML = "البريد الألكتروني";
  document.querySelector(".translate27").innerHTML = "أشترك";
  document.querySelector(".translate28").innerHTML = "الصفحة الرأيسية";
  document.querySelector(".translate29").innerHTML = "المنتجات";
  document.querySelector(".translateX1").innerHTML = "تطبيقات تساعد";
  document.querySelector(".translateX2").innerHTML = "المتجر";
  document.querySelector(".translateX3").innerHTML = "غالبًا ما يستخدم مصطلح \"ضعاف السمع لوصف الأشخاص الذين يعانون من أي درجة من فقدان السمع ، من خفيف إلى عميق ، بما في ذلك الصم وضعاف السمع. يفضل العديد من الأشخاص الصم أو ضعاف السمع مصطلحي  و \"ضعاف السمع ، لأنهم يعتبرونهم أكثر إيجابية من مصطلح \"ضعاف السمع مما يعني وجود عجز أو أن هناك شيئًا خاطئًا يؤدي إلى شخص أقل من كله.";
  document.querySelector(".translateX4").innerHTML = "بعض المنتجات التي يستخدمونها";
  document.querySelector(".translateX5").innerHTML = "المتجر";
}

//Arabic translation for the Application page
function Arabic2(){
  //We reload the page to go back to english
  if(document.querySelector(".btnAr").innerHTML == "English")
  {
      location.reload()
  }
  //Arabic Translation
  document.querySelector(".btnAr").innerHTML = "English";
  document.querySelector(".translate1").innerHTML = "إسمع";
  document.querySelector(".translate2").innerHTML = "مساعدة السمع";
  document.getElementsByClassName('translate3').innerHTML = "المطورين";
  //We use a forloop so we do not repeat ourseleves 3 times for each line
  for(let i = 0; i< 4; i++){
    document.getElementsByClassName('translate4')[i].innerHTML = "المعلومات";
  }
  document.querySelector(".translate5").innerHTML = " عما قريب مشاكل العين";
  document.querySelector(".translate6").innerHTML = "تسجيل دخول";
  document.querySelector(".translate7").innerHTML = "تسجيل حساب";
  //We use a forloop so we do not repeat ourseleves 3 times for each line
  for(let i = 0; i< 3; i++){
    document.getElementsByClassName('translate8')[i].innerHTML = "سجل اليوم";
  }
  //We use a forloop so we do not repeat ourseleves 3 times for each line
  for(let i = 0; i< 3; i++){
    document.getElementsByClassName('translate9')[i].innerHTML = "تطبيق";
  }
  document.querySelector(".translate10").innerHTML = "محسن الصوت";
  document.querySelector(".translate11").innerHTML = "الكتابة المباشرة";
  document.querySelector(".translate12").innerHTML = "ايفا ";
  document.querySelector(".translate13").innerHTML = "محسن الصوت";
  document.querySelector(".translateX").innerHTML = "يجعل مضخم الصوت المحادثات اليومية والأصوات المحيطة أكثر سهولة بين الأشخاص الذين يعانون من ضعف السمع ، وذلك باستخدام هاتف Android وزوج من سماعات الرأس فقط. استخدم \"مضخّم الصوت لفلترة الأصوات من حولك وعلى جهازك وزيادتها وتضخيمها.";
  document.querySelector(".translate14").innerHTML = "الكتابة المباشرة";
  document.querySelector(".translate15").innerHTML = " تجعل ميزة الكتابة المباشرة والإشعارات الصوتية المحادثات اليومية والأصوات المحيطة أكثر سهولة بين الأشخاص الصم وضعاف السمع ، باستخدام هاتفك أو جهازك اللوحي الذي يعمل بنظام Android فقط.";
  document.querySelector(".translate16").innerHTML = "  أيفا";
  document.querySelector(".translate17").innerHTML = " تستخدم Ava التسميات التوضيحية لنقل الصوت إلى نص مباشرًا لتوفير إمكانية الوصول للأشخاص الذين يعانون من الصمم أو ضعاف السمع (HoH). يوفر تطبيق تحويل الكلام إلى نص من Ava نسخًا صوتيًا في الوقت الفعلي على مدار الساعة طوال أيام الأسبوع مع حوالي 5 أخطاء في 100 كلمة استنادًا إلى AI ، وأعلى دقة ممكنة مع Ava Scribe عند حدوث خطأ واحد تقريبًا في 100 كلمة.";
  document.querySelector(".translate18").innerHTML = "مساعدة السمع";
  document.querySelector(".translate19").innerHTML = "الصفحة الرأيسية";
  document.querySelector(".translate20").innerHTML = "تطبيقات مساعدة ";
  document.querySelector(".translate21").innerHTML = "الصفحة الرأيسية";
  document.querySelector(".translate24").innerHTML = "قم بلأشتراك مع صحيفتنا ";
  document.querySelector(".translate25").innerHTML = "معلومات مشيقة جديدة كل شهر";
  document.querySelector(".translate26").innerHTML = "البريد الألكتروني";
  document.querySelector(".translate27").innerHTML = "أشترك";
  document.querySelector(".translate28").innerHTML = "المطورون ";
  document.querySelector(".translate29").innerHTML = "المنتجات";
  document.querySelector(".translateX1").innerHTML = "تطبيقات تساعد";
  document.querySelector(".translateX2").innerHTML = "المتجر";
  //document.querySelector(".translateX3").innerHTML = "غالبًا ما يستخدم مصطلح \"ضعاف السمع لوصف الأشخاص الذين يعانون من أي درجة من فقدان السمع ، من خفيف إلى عميق ، بما في ذلك الصم وضعاف السمع. يفضل العديد من الأشخاص الصم أو ضعاف السمع مصطلحي  و \"ضعاف السمع ، لأنهم يعتبرونهم أكثر إيجابية من مصطلح \"ضعاف السمع مما يعني وجود عجز أو أن هناك شيئًا خاطئًا يؤدي إلى شخص أقل من كله.";
  document.querySelector(".translateX4").innerHTML = "بعض التطبيقات التي تساعد";
  document.querySelector(".translateX5").innerHTML = "المتجر";
  document.querySelector(".translateX21").innerHTML = "الصفحة الرأيسية";

  for(let i = 0; i< 3; i++){
    document.getElementsByClassName('translateV')[i].innerHTML = "مشاهدة المعلومات";
  }

}

//Arabic translation for the Shop page
function Arabic3(){
  //We reload the page to go back to english
  if(document.querySelector(".btnAr").innerHTML == "English")
  {
      location.reload()
  }
  //Arabic Translation
  document.querySelector(".btnAr").innerHTML = "English";
  document.querySelector(".translate1").innerHTML = "إسمع";
  document.querySelector(".translate2").innerHTML = "مساعدة السمع";
  document.querySelector(".translateY").innerHTML = "مساعدة السمع";
  //We use a forloop so we do not repeat ourseleves 3 times for each line
  for(let i = 0; i< 2; i++){
    document.getElementsByClassName('translate3')[i].innerHTML = "المطورين";
  }
  //We use a forloop so we do not repeat ourseleves 3 times for each line
  for(let i = 0; i< 3; i++){
    document.getElementsByClassName('translate4')[i].innerHTML = "المعلومات";
  }
  document.querySelector(".translate29").innerHTML = "المنتجات";
  document.querySelector(".translateX29").innerHTML = "المنتجات";
  document.querySelector(".translate5").innerHTML = "تطبيقات مساعدة";
  document.querySelector(".translateX5").innerHTML = " عما قريب مشاكل العين";
  document.querySelector(".translate6").innerHTML = "تسجيل دخول";
  document.querySelector(".translate7").innerHTML = "تسجيل حساب";
  //We use a forloop so we do not repeat ourseleves 3 times for each line
  for(let i = 0; i< 9; i++){
    document.getElementsByClassName('translate8')[i].innerHTML = "أشتري ";
  }
  for(let i = 0; i< 3; i++){
    document.getElementsByClassName('translateV')[i].innerHTML = "مشاهدة المعلومات";
  }
  document.querySelector(".translate13").innerHTML = "بعض المنتجات";
  document.querySelector(".translate14").innerHTML = "اطلب وسداد ثمن المعينة السمعية الخاصة بك بسهولة عبر الإنترنت. سيقوم اختصاصي العناية بالسمع بتعيين المعينة السمعية الخاصة بك عن بُعد بنسبة 100٪ وإرسالها إليك في غضون أيام قليلة.";
  document.querySelector(".translate15").innerHTML = "سماعة الأذن Oticon More لها اسم مناسب ، وتقدم لك المزيد من كل شيء: أكثر وضوحا";
  document.querySelector(".translate16").innerHTML = " إن المعينة السمعية Phonak Naida لها اسم مناسب ، وتقدم لك المزيد من كل شيء: أكثر بساطة";
  document.querySelector(".translate17").innerHTML = "Order and pay for your hearing aid easily online The hearing care professional will set your hearing aid 100% remotely and send it to you within a few days.";
  document.querySelector(".translate18").innerHTML = "يتفوق Phonak Audéo Paradise في الأداء السمعي ويضم العديد من الميزات المتطورة. إنه يوفر جودة صوت لا مثيل لها وتمكين التطبيقات الذكية.";
  document.querySelector(".translate19").innerHTML = " Phonak Audéo Marvel focuses on what you expect from a first-class hearing aid a clear, rich sound experience.";
  //document.querySelector(".translate20").innerHTML = "مشاكل العين";
  document.querySelector(".translate21").innerHTML = "الصفحة الرأيسية";
  document.querySelector(".translateX21").innerHTML = "الصفحة الرأيسية";
  //document.querySelector(".translate22").innerHTML = "achromatopsia";
  //document.querySelector(".translate23").innerHTML = "نظارات العين";
  document.querySelector(".translate24").innerHTML = "قم بلأشتراك مع صحيفتنا ";
  document.querySelector(".translate25").innerHTML = "معلومات مشيقة جديدة كل شهر";
  document.querySelector(".translate26").innerHTML = "البريد الألكتروني";
  document.querySelector(".translate27").innerHTML = "أشترك";
  document.querySelector(".translateY1").innerHTML = "الصفحة الرأيسية";
  
  //document.querySelector(".translateX29").innerHTML = "المنتجات";
  document.querySelector(".translate20").innerHTML = "تطبيقات تساعد";
  document.querySelector(".translateX2").innerHTML = "المتجر";
  document.querySelector(".translateG2").innerHTML = "المتجر";
  document.querySelector(".translateX3").innerHTML = "غالبًا ما يستخدم مصطلح \"ضعاف السمع لوصف الأشخاص الذين يعانون من أي درجة من فقدان السمع ، من خفيف إلى عميق ، بما في ذلك الصم وضعاف السمع. يفضل العديد من الأشخاص الصم أو ضعاف السمع مصطلحي  و \"ضعاف السمع ، لأنهم يعتبرونهم أكثر إيجابية من مصطلح \"ضعاف السمع مما يعني وجود عجز أو أن هناك شيئًا خاطئًا يؤدي إلى شخص أقل من كله.";
  document.querySelector(".translateX4").innerHTML = "بعض المنتجات التي يستخدمونها";

  
}
