  var page1 = document.getElementById("page1");
  var page2 = document.getElementById("page2");
  var page3 = document.getElementById("page3");
  var page4 = document.getElementById("page4");
  var page5 = document.getElementById("page5");
  var page6 = document.getElementById("page6");
  var page7 = document.getElementById("page7");
  var page8 = document.getElementById("page8");
  var page9 = document.getElementById("page9");
  var page10 = document.getElementById("page10");
  var page11 = document.getElementById("page11");
  var pIdea = document.getElementById("pIdea");
  var pRead = document.getElementById("pRead");
  var pHole = document.getElementById("pHole");
  var pNarrow = document.getElementById("pNarrow");
  var pNarrow2 = document.getElementById("pNarrow2");
  var pNarrow3 = document.getElementById("pNarrow3");
  var pUse = document.getElementById("pUse");
  var page12 = document.getElementById("page12");
  var pMono = document.getElementById("pMono");
  var pJournals = document.getElementById("pJournals");
  var pVolumes = document.getElementById("pVolumes");
  var pConference = document.getElementById("pConference");
  var page13 = document.getElementById("page13");

  //page 1
  var beginButton = document.querySelector("#BeginButton");
  //page 2
  var writingButton = document.getElementById("WritingButton");
  var evaluatingButton = document.getElementById("EvaluatingButton");
  var selectButton = document.getElementById("SelectButton");
  //page 3
  var sourceResearch = document.getElementById("sourceResearch");
  var evaluatingSources = document.getElementById("evaluatingSources");
  var p3popup = document.getElementById("p3popup");
  var noButton = document.getElementById("noButton");
  var yesButton = document.getElementById("yesButton");
  var arrowDown1 = document.getElementById("arrowDown1");
  var arrowDown2 = document.getElementById("arrowDown2");
  //page 4
  var p4topicContinue = document.getElementById("createTopicContinue");
  var p4Back = document.getElementById("p4Back");
  //page 5
  var p5continue = document.getElementById("p5Continue");
  var p5Back = document.getElementById("p5Back");
  var topicB1 = document.getElementById("topicBox1");
  var topicB2 = document.getElementById("topicBox2");
  var topicB3 = document.getElementById("topicBox3");
  var topicB4 = document.getElementById("topicBox4");
  var topicB5 = document.getElementById("topicBox5");
  var topicB6 = document.getElementById("topicBox6");
  var topicB7 = document.getElementById("topicBox7");
  var topicB8 = document.getElementById("topicBox8");
  var topicB9 = document.getElementById("topicBox9");
  var p5text = document.getElementById("p5text");
  //page 6
  var tb1 = document.getElementById("tB1");
  var tb2 = document.getElementById("tB2");
  var tb3 = document.getElementById("tB3");
  var tb4 = document.getElementById("tB4");
  var tb5 = document.getElementById("tB5");
  var tb6 = document.getElementById("tB6");
  var tb7 = document.getElementById("tB7");
  var tb8 = document.getElementById("tB8");
  var tb9 = document.getElementById("tB9");
  var p6Continue = document.getElementById("p6Continue");
  var p6Back = document.getElementById("p6Back");
  var didPage6 = false;
  var tsb1 = document.getElementById("tsb1");
  var congratsContinueBox = document.getElementById("congratsContinueBox");
  var p6Continue = document.getElementById("p6Continue");
  var box1 = document.getElementById("box1");
  var box2 = document.getElementById("box2");
  var box3 = document.getElementById("box3");
  var topicText1 = document.getElementById("topicText1");
  var topicText2 = document.getElementById("topicText2");
  var topicText3 = document.getElementById("topicText3");
  //page 7
  var p7Back = document.getElementById("p7Back");
  var p7Continue = document.getElementById("p7Continue");
  //page 8
  var p8Back = document.getElementById("p8Back");
  var p8Continue = document.getElementById("p8Continue");
  var scholarlyApparatus = document.getElementById("scholarlyApparatus");
  var pScholarlyApparatus = document.getElementById("pageScholarlyApparatus");
  var scholarlyApparatusBack = document.getElementById("pScholarlyApparatusBack");
  var peerReviewed = document.getElementById("peerReviewed");
  var pPeerReviewed = document.getElementById("pagePeerReviewed");
  var peerReviewedBack = document.getElementById("pPeerReviewedBack");
  //page 9
  var p9Back = document.getElementById("p9Back");
  var p9Continue = document.getElementById("p9Continue");
  var qMonograph = document.getElementById("qM");
  var qJournals = document.getElementById("qJ");
  var qVolumes = document.getElementById("qV");
  var qConference = document.getElementById("qC");
  var monographSlide = document.getElementById("monographSlide");

  var monograph = document.getElementById("Monograph");
  var journals = document.getElementById("Journals");
  var volumes = document.getElementById("Volumes");
  var conference = document.getElementById("Conference");
  var pMonoBack = document.getElementById("pMonoBack");
  var pJournalsBack = document.getElementById("pJournalsBack");
  var pVolumesBack = document.getElementById("pVolumesBack");
  var pConferenceBack = document.getElementById("pConferenceBack");
  //page 10
  var p10Continue = document.getElementById("WritingButton");
  //page 11
  var list1 = document.getElementById("list1");
  var list2 = document.getElementById("list2");
  var list3 = document.getElementById("list3");
  var list4 = document.getElementById("list4");
  var list5 = document.getElementById("list5");
  var check1 = document.getElementById("checkmark1");
  var check2 = document.getElementById("checkmark2");
  var check3 = document.getElementById("checkmark3");
  var check4 = document.getElementById("checkmark4");
  var check5 = document.getElementById("checkmark5");
  var p11Continue = document.getElementById("p11Continue");
  var p11Back = document.getElementById("p11Back");
  //pageIdea
  var pIdeaBack = document.getElementById("pIdeaBack");
  var pReadBack = document.getElementById("pReadBack");
  var pHoleBack = document.getElementById("pHoleBack");
  var pNarrowContinue = document.getElementById("pNarrowContinue");
  var pNarrowContinue2 = document.getElementById("pNarrowContinue2");
  var pNarrowBack = document.getElementById("pNarrowBack");
  var pUseBack = document.getElementById("pUseBack");
  //page 12
  var p12Continue = document.getElementById("p12Continue");
  var p12Back = document.getElementById("p12Back");

  //ONCLICK
  //page1
  beginButton.onclick = function(){beginFunction()};
  //page2
  evaluatingButton.onclick = function(){evalButtonFunction()};
  // evaluatingButton.onmouseover = function(){wobbleOnHover(evaluatingButton)};
  // evaluatingButton.onmouseout = function(){wobbleDone(evaluatingButton)};
  //page3
  noButton.onclick = function(){noContinue()};
  yesButton.onclick = function(){yesContinue()};
  arrowDown1.onclick = function(){page3Continue()};
  arrowDown2.onclick = function(){page3Continue()};
  //page4
  p4topicContinue.onclick = function(){topicContinue()};
  p4Back.onclick = function(){page4Back()};
  //page5
  p5continue.onclick = function(){page5Continue()};
  p5Back.onclick = function(){page5Back()};
  box1.onchange = function(){box1Entered()};
  box2.onchange = function(){box2Entered()};
  box3.onchange = function(){box3Entered()};
  topicB1.onchange = function(){checkComplete()};
  topicB2.onchange = function(){checkComplete()};
  topicB3.onchange = function(){checkComplete()};
  topicB4.onchange = function(){checkComplete()};
  topicB5.onchange = function(){checkComplete()};
  topicB6.onchange = function(){checkComplete()};
  topicB7.onchange = function(){checkComplete()};
  topicB8.onchange = function(){checkComplete()};
  topicB9.onchange = function(){checkComplete()};

  //page6
  p6Continue.onclick = function(){page6continue()};
  p6Back.onclick = function(){page6back()};
  tb1.onclick = function(){select(tb1)};
  tb2.onclick = function(){select(tb2)};
  tb3.onclick = function(){select(tb3)};
  tb4.onclick = function(){select(tb4)};
  tb5.onclick = function(){select(tb5)};
  tb6.onclick = function(){select(tb6)};
  tb7.onclick = function(){select(tb7)};
  tb8.onclick = function(){select(tb8)};
  tb9.onclick = function(){select(tb9)};
  tsb1.onchange = function(){continue6()};
  //page7
  p7Continue.onclick = function(){page7Continue()};
  p7Back.onclick = function(){page7Back()};
  //page8
  p8Continue.onclick = function(){page8Continue()};
  p8Back.onclick = function(){page8Back()};
  scholarlyApparatus.onclick = function(){pageScholarlyApparatus()};
  scholarlyApparatusBack.onclick = function(){pageScholarlyApparatusBack()};
  peerReviewed.onclick = function(){pagePeerReviewed()};
  peerReviewedBack.onclick = function(){pagePeerReviewedBack()};

  //page9
  p9Continue.onclick = function(){page9Continue()};
  p9Back.onclick = function(){page9Back()};

  qMonograph.onchange = function(){questionContinue()};
  qJournals.onchange = function(){questionContinue()};
  qConference.onchange = function(){questionContinue()};
  qVolumes.onchange = function(){questionContinue()};

  monograph.onclick = function(){monographPageOpen()};
  journals.onclick = function(){journalPageOpen()};
  volumes.onclick = function(){volumePageOpen()};
  conference.onclick = function(){conferencePageOpen()};

  pMonoBack.onclick = function(){pageMonoBack()};
  pJournalsBack.onclick = function(){pageJournalsback()};
  pVolumesBack.onclick = function(){pageVolumesBack()};
  pConferenceBack.onclick = function(){pageConferenceBack()};
  //page10
  p10Continue.onclick = function(){page10Continue()};
  //page11
  list1.onclick = function(){ideaPage()};
  list2.onclick = function(){readPage()};
  list3.onclick = function(){holePage()};
  list4.onclick = function(){narrowPage()};
  list5.onclick = function(){usePage()};
  p11Continue.onclick = function(){page11Continue()};
  p11Back.onclick = function(){page11Back()};
  //pageIdea
  pIdeaBack.onclick = function(){ideaBack()};
  pReadBack.onclick = function(){readBack()};
  pHoleBack.onclick = function(){holeBack()};
  pNarrowBack.onclick = function(){narrowBack()};
  pNarrowContinue.onclick = function(){narrowContinue()};
  pNarrowContinue2.onclick = function(){narrow2Continue()};
  pUseBack.onclick = function(){useBack()};
  //page12
  p12Back.onclick = function(){page12Back()};
  p12Continue.onclick = function(){page12Continue()};



  function wobbleOnHover(el){
    anime.remove(el)
    anime({
      targets: el,
      rotate: 1
    });
    //el.classList.add("animated");
    //el.classList.add("pulse");
  }
  function wobbleDone(el){
    anime.remove(el)
    anime({
      targets: el,
      rotate: 0
    });
    //el.classList.remove("animated");
    //el.classList.remove("pulse");
  }

  function select(el){
    el.classList.add("selected");
    if(el != tb1){
      tb1.classList.remove("selected");
    }
    if(el != tb2){
      tb2.classList.remove("selected");
    }
    if(el != tb3){
      tb3.classList.remove("selected");
    }
    if(el != tb4){
      tb4.classList.remove("selected");
    }
    if(el != tb5){
      tb5.classList.remove("selected");
    }
    if(el != tb6){
      tb6.classList.remove("selected");
    }
    if(el != tb7){
      tb7.classList.remove("selected");
    }
    if(el != tb8){
      tb8.classList.remove("selected");
    }
    if(el != tb9){
      tb9.classList.remove("selected");
    }
  }

  function beginFunction(){
    page1.classList.add("animated");
    page1.classList.add("slideOutLeft");
    page2.classList.add("animated");
    page2.classList.add("slideInRight");
  }
  function evalButtonFunction(){
    page2.classList.add("animated");
    page2.classList.add("slideOutUp");
//    page3.classList.remove("slideOutDown");
    page3.classList.add("animated");
    page3.classList.add("slideInUp");
  }
  function noContinue(){
    page3.classList.add("animated");
    page3.classList.remove("slideInUp");
    page3.classList.add("slideOutLeft");
    page3.classList.remove("slideInLeft");
    page3.classList.remove("slideInDown");
    page4.classList.add("animated");
    page4.classList.add("slideInRight");
    page4.classList.remove("slideOutRight");
    page7.classList.remove("slideOutDown");
    p3popup.classList.add("hidden");
    p3popup.classList.remove("p3popup");
  }
  function page3Continue(){
    page3.classList.add("slideOutUp");
    page3.classList.remove("slideInDown");
    page3.classList.remove("slideInLeft");
    page4.classList.remove("slideOutRight");
    page4.classList.add("animated");
    page4.classList.add("slideOutUp");
    page5.classList.add("animated");
    page5.classList.add("slideOutUp");
    page6.classList.add("animated");
    page6.classList.add("slideOutUp");
    page7.classList.add("animated");
    page7.classList.add("slideInUp");
    page7.classList.remove("slideOutDown");
    page4.style.zIndex = "-1";
    page5.style.zIndex = "-1";
    page6.style.zIndex = "-1";
  }
  function topicContinue(){
    page4.classList.add("animated");
    page4.classList.add("slideOutLeft");
    page4.classList.remove("slideInRight");
    page5.classList.add("animated");
    page5.classList.add("slideInRight");
    page5.classList.remove("slideOutRight");
  }
  function page4Back(){
    page3.classList.add("slideInLeft");
    page3.classList.remove("slideOutLeft");
    page4.classList.add("slideOutRight");
    page4.classList.remove("slideInRight");
}
  function page5Back(){
    page4.classList.add("slideInLeft");
    page4.classList.remove("slideInRight");
    page4.classList.remove("slideOutLeft");
    page4.classList.remove("slideOutRight");
    page5.classList.add("slideOutRight");
    page5.classList.remove("slideInRight");
  }
  function page5Continue(){
    page5.classList.remove("slideInRight");
    page5.classList.add("slideOutLeft");
    page5.classList.remove("slideInLeft");
    page6.classList.add("animated");
    page6.classList.add("slideInRight");
    page6.classList.remove("slideOutRight");

    tb1.innerHTML = topicB1.value;
    tb2.innerHTML = topicB2.value;
    tb3.innerHTML = topicB3.value;
    tb4.innerHTML = topicB4.value;
    tb5.innerHTML = topicB5.value;
    tb6.innerHTML = topicB6.value;
    tb7.innerHTML = topicB7.value;
    tb8.innerHTML = topicB8.value;
    tb9.innerHTML = topicB9.value;
  }
  function box1Entered(){
    topicText1.innerHTML = box1.value + ':';
    topicText1.classList.add("p5topicText");
    topicB1.classList.add("boxes2");
    topicB2.classList.add("boxes2");
    topicB3.classList.add("boxes1");
    topicText1.classList.remove("hidden");
    topicB1.classList.remove("hidden");
    topicB2.classList.remove("hidden");
    topicB3.classList.remove("hidden");
    p5text.classList.add("p5text");
    p5text.classList.remove("hidden");
  }
  function box2Entered(){
    topicText2.innerHTML = box2.value + ':';
    topicText2.classList.add("p5topicText");
    topicB4.classList.add("boxes2");
    topicB5.classList.add("boxes2");
    topicB6.classList.add("boxes1");
    topicText2.classList.remove("hidden");
    topicB4.classList.remove("hidden");
    topicB5.classList.remove("hidden");
    topicB6.classList.remove("hidden");
    p5text.classList.add("p5text");
    p5text.classList.remove("hidden");
  }
  function box3Entered(){
    topicText3.innerHTML = box3.value + ':';
    topicText3.classList.add("p5topicText");
    topicB7.classList.add("boxes2");
    topicB8.classList.add("boxes2");
    topicB9.classList.add("boxes1");
    topicText3.classList.remove("hidden");
    topicB7.classList.remove("hidden");
    topicB8.classList.remove("hidden");
    topicB9.classList.remove("hidden");
    p5text.classList.add("p5text");
    p5text.classList.remove("hidden");
  }
  function checkComplete(){
    if(topicB1.value != "" && topicB2.value != "" && topicB3.value != "" && topicB4.value != "" && topicB5.value != "" && topicB6.value != "" && topicB7.value != "" && topicB8.value != "" && topicB9.value != ""){
      p5continue.classList.add("continue");
      p5continue.classList.remove("hidden");
    }
  }
  function yesContinue(){
    p3popup.classList.add("p3popup");
    p3popup.classList.remove("hidden");
  }
  function page6continue(){
    page6.classList.remove("slideInRight");
    page6.classList.add("slideOutUp");
    page7.classList.add("animated");
    page7.classList.add("slideInUp");
    didPage6 = true;
  }
  function page6back(){
    page5.classList.add("slideInLeft");
    page5.classList.remove("slideInRight");
    page5.classList.remove("slideOutLeft");
    page6.classList.add("slideOutRight");
    page6.classList.remove("slideInRight");
  }
  function continue6(){
    congratsContinueBox.classList.add("congratsContinueBox");
    congratsContinueBox.classList.remove("hidden");
    p6Continue.classList.add("continue");
    p6Continue.classList.remove("hidden");
  }
  function page7Back(){
    page3.classList.remove("slideOutUp");
    page3.classList.remove("slideInUp");
    page3.classList.add("slideInDown");
    page4.classList.remove("slideOutUp");
    page5.classList.remove("slideOutUp");
    page6.classList.remove("slideOutUp");
    page7.classList.remove("slideInUp");
    page7.classList.add("slideOutDown");
    if(didPage6)
    setTimeout(pageZIndex, 1000);
  }
  function page7Continue(){
    page7.classList.remove("slideOutDown");
    page8.classList.remove("slideOutDown");
    page7.classList.remove("slideInUp");
    page7.classList.add("slideOutUp");
    page8.classList.add("animated");
    page8.classList.add("slideInUp");
  }
  function page8Continue(){
    page8.classList.remove("slideOutDown");
    page8.classList.remove("slideInUp");
    page8.classList.add("slideOutLeft");
    page9.classList.add("animated");
    page9.classList.add("slideInRight");
    page9.classList.remove("slideOutRight");
    pScholarlyApparatus.style.zIndex = "-1";
    pPeerReviewed.style.zIndex = "-1";
  }
  function page8Back(){
    page7.classList.add("slideInDown");
    page7.classList.remove("slideOutUp");
    page8.classList.add("slideOutDown");
    page8.classList.remove("slideInUp");
  }
  function pageScholarlyApparatus(){
    pScholarlyApparatus.style.zIndex = "1";
    pScholarlyApparatus.classList.add("animated");
    pScholarlyApparatus.classList.add("bounceIn");
    pScholarlyApparatus.classList.remove("bounceOut");
  }
  function pageScholarlyApparatusBack(){
    pScholarlyApparatus.classList.remove("bounceIn");
    pScholarlyApparatus.classList.add("bounceOut");
    setTimeout(pageZIndex, 1000);
  }
  function pagePeerReviewed(){
    pPeerReviewed.style.zIndex = "1";
    pPeerReviewed.classList.add("animated");
    pPeerReviewed.classList.add("bounceIn");
    pPeerReviewed.classList.remove("bounceOut");
  }
  function pagePeerReviewedBack(){
    pPeerReviewed.classList.remove("bounceIn");
    pPeerReviewed.classList.add("bounceOut");
    setTimeout(pageZIndex, 1000);
  }
  function page9Continue(){
    page9.classList.remove("slideInRight");
    page9.classList.add("slideOutUp");
    page10.classList.add("animated");
    page10.classList.add("slideInUp");
    pMono.style.zIndex = "-1";
    pJournals.style.zIndex = "-1";
    pVolumes.style.zIndex = "-1";
    pConference.style.zIndex = "-1";
  }
  function page9Back(){
    page9.classList.remove("slideOutUp");
    page8.classList.remove("slideOutDown");
    page8.classList.remove("slideOutLeft");
    page8.classList.add("slideInLeft");
    page9.classList.add("slideOutRight");
  }
  function pageZIndex(){
    page4.style.zIndex = "";
    page5.style.zIndex = "";
    page6.style.zIndex = "";
    pMono.style.zIndex = "-1";
    pJournals.style.zIndex = "-1";
    pVolumes.style.zIndex = "-1";
    pConference.style.zIndex = "-1";
    pUse.style.zIndex = "-1";
    pNarrow.style.zIndex = "-1";
    pNarrow2.style.zIndex = "-1";
    pNarrow3.style.zIndex = "-1";
    pHole.style.zIndex = "-1";
    pRead.style.zIndex = "-1";
    pIdea.style.zIndex = "-1";
    pScholarlyApparatus.style.zIndex = "-1";
    pPeerReviewed.style.zIndex = "-1";
  }
  function monographPageOpen(){
    pMono.classList.add("animated");
    pMono.classList.add("bounceIn");
    pMono.style.zIndex = "1";
    pMono.classList.remove("bounceOut");
  }
  function pageMonoBack(){
    pMono.classList.remove("bounceIn");
    pMono.classList.add("bounceOut");
    setTimeout(pageZIndex, 1000);
  }
  function journalPageOpen(){
    pJournals.classList.add("animated");
    pJournals.classList.add("bounceIn");
    pJournals.style.zIndex = "1";
    pJournals.classList.remove("bounceOut");
  }
  function pageJournalsback(){
    pJournals.classList.remove("bounceIn");
    pJournals.classList.add("bounceOut");
    setTimeout(pageZIndex, 1000);
  }
  function volumePageOpen(){
    pVolumes.classList.add("animated");
    pVolumes.classList.add("bounceIn");
    pVolumes.style.zIndex = "1";
    pVolumes.classList.remove("bounceOut");
  }
  function pageVolumesBack(){
    pVolumes.classList.remove("bounceIn");
    pVolumes.classList.add("bounceOut");
    setTimeout(pageZIndex, 1000);
  }
  function conferencePageOpen(){
    pConference.classList.add("animated");
    pConference.classList.add("bounceIn");
    pConference.style.zIndex = "1";
    pConference.classList.remove("bounceOut");
  }
  function pageConferenceBack(){
    pConference.classList.remove("bounceIn");
    pConference.classList.add("bounceOut");
    setTimeout(pageZIndex, 1000);
  }
  function questionContinue(){
    if(qMonograph.value != "" && qJournals.value != "" && qVolumes.value != ""  && qConference.value != "" ){
      monographSlide.classList.add("animated");
      monographSlide.classList.add("fadeIn");
      p9Continue.classList.add("continue");
      // monographSlide.classList.remove("hidden");
      // monographSlide.classList.add("monoShow");
    }
  }
  function page10Continue(){
    page10.classList.add("slideOutUp");
    page10.classList.remove("slideInDown");
    page10.classList.remove("slideInUp");
    page11.classList.add("animated");
    page11.classList.add("slideInUp");
    page11.classList.remove("slideOutUp");
    page11.classList.remove("slideOutDown");
  }
  function ideaPage(){
    check1.classList.add("checked");
    check1.classList.remove("unchecked");
    pIdea.style.zIndex = "1";
    pIdea.classList.add("animated");
    pIdea.classList.add("bounceIn");
    pIdea.classList.remove("bounceOut");
  }
  function ideaBack(){
    pIdea.classList.remove("bounceIn");
    pIdea.classList.add("bounceOut");
    setTimeout(pageZIndex, 1000);
  }
  function readPage(){
    check2.classList.add("checked");
    check2.classList.remove("unchecked");
    pRead.style.zIndex = "1";
    pRead.classList.add("animated");
    pRead.classList.add("bounceIn");
    pRead.classList.remove("bounceOut");
  }
  function readBack(){
    pRead.classList.remove("bounceIn");
    pRead.classList.add("bounceOut");
    setTimeout(pageZIndex, 1000);
  }
  function holePage(){
    check3.classList.add("checked");
    check3.classList.remove("unchecked");
    pHole.style.zIndex = "1";
    pHole.classList.add("animated");
    pHole.classList.add("bounceIn");
    pHole.classList.remove("bounceOut");
  }
  function holeBack(){
    pHole.classList.remove("bounceIn");
    pHole.classList.add("bounceOut");
    setTimeout(pageZIndex, 1000);
  }
  function narrowPage(){
    check4.classList.add("checked");
    check4.classList.remove("unchecked");
    pNarrow.style.zIndex = "1";
    pNarrow.classList.add("animated");
    pNarrow.classList.add("bounceIn");
    pNarrow.classList.remove("bounceOut");
  }
  function narrowContinue(){
    pNarrow2.style.zIndex = "1";
    pNarrow2.classList.add("animated");
    pNarrow2.classList.add("bounceIn");
    pNarrow2.classList.remove("bounceOut");
  }
  function narrow2Continue(){
    pNarrow3.style.zIndex = "1";
    pNarrow3.classList.add("animated");
    pNarrow3.classList.add("bounceIn");
    pNarrow3.classList.remove("bounceOut");
  }
  function narrowBack(){
    pNarrow.classList.remove("bounceIn");
    pNarrow.classList.add("bounceOut");
    pNarrow2.classList.remove("bounceIn");
    pNarrow2.classList.add("bounceOut");
    pNarrow3.classList.remove("bounceIn");
    pNarrow3.classList.add("bounceOut");
    setTimeout(pageZIndex, 1000);
  }
  function usePage(){
    check5.classList.add("checked");
    check5.classList.remove("unchecked");
    pUse.style.zIndex = "1";
    pUse.classList.add("animated");
    pUse.classList.add("bounceIn");
    pUse.classList.remove("bounceOut");
  }
  function useBack(){
    pUse.classList.remove("bounceIn");
    pUse.classList.add("bounceOut");
    setTimeout(pageZIndex, 1000);
  }
  function page11Continue(){
    page11.classList.remove("slideInUp");
    page11.classList.add("slideOutUp");
    page12.classList.add("animated");
    page12.classList.add("slideInUp");
    page12.classList.remove("slideInDown");
    page12.classList.remove("slideOutDown");
  }
  function page11Back(){
    page11.classList.remove("slideInUp");
    page10.classList.remove("slideOutUp");
    page10.classList.add("slideInDown");
    page11.classList.remove("slideInDown");
    page11.classList.add("slideOutDown");
  }
  function page12Continue(){
    page12.classList.remove("slideInUp");
    page12.classList.add("slideOutLeft");
    page13.classList.add("animated");
    page13.classList.add("slideInRight");
  }
  function page12Back(){
    page12.classList.remove("slideInUp");
    page12.classList.add("slideOutDown");
    page11.classList.remove("slideOutUp");
    page11.classList.add("slideInDown");
  }
