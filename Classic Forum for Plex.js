// ==UserScript==
// @name         Classic Forum for Plex
// @namespace    forums.plex.tv
// @include      http://forums.plex.tv/*
// @include      https://forums.plex.tv/*
// @version      0.1
// @description  The JavaScript portion of the skin. Find the CSS portion at https://userstyles.org/styles/117161/classic-forum-for-plex
// @author       Justin Vanderhooft
// @match        http://userscripts.org/
// @grant        none
// ==/UserScript==

var commentElements = document.getElementsByClassName('Item ItemComment Online');
for(var i = 0; i < commentElements.length; i++)
{
    var authorElements = commentElements[i].getElementsByClassName('Author');
    for(var j = 0; j < authorElements.length; j++) {
        $("<span class=\"MItem CustSkin-OnlineStatus\">Online</span>").appendTo(authorElements[j]);
    }
}

var discussionElements = document.getElementsByClassName('ItemDiscussion');
for(var i = 0; i < discussionElements.length; i++) {
    var title = discussionElements[i].getElementsByClassName('Title')[0];
    var photo = discussionElements[i].getElementsByClassName('IndexPhoto PhotoWrap')[0]
    var options = discussionElements[i].getElementsByClassName('Options')[0];
    var answeredTag = discussionElements[i].getElementsByClassName('Tag QnA-Tag-Accepted')[0];
    var answerTag = discussionElements[i].getElementsByClassName('Tag QnA-Tag-Answered')[0];
    var questionTag = discussionElements[i].getElementsByClassName('Tag QnA-Tag-Question')[0];
    var announcementTag = discussionElements[i].getElementsByClassName('Tag Tag-Announcement')[0]; 
    var closedTag = discussionElements[i].getElementsByClassName('Tag Tag-Closed')[0];
    var author = discussionElements[i].getElementsByClassName('MItem DiscussionAuthor')[0];
    var viewCount = discussionElements[i].getElementsByClassName('MItem ViewCount')[0];
    var commentCount = discussionElements[i].getElementsByClassName('MItem CommentCount')[0];
    var discussionScore = discussionElements[i].getElementsByClassName('MItem DiscussionScore')[0];
    var lastComment = discussionElements[i].getElementsByClassName('MItem LastCommentBy')[0];
    var lastCommentDate = discussionElements[i].getElementsByClassName('MItem LastCommentDate')[0];

    $("<div class=\".col-md-8 Meta CustSkin-LeftDiscussionColumn\"></div>").appendTo(discussionElements[i]);
    $("<div class=\".col-md-4 Meta CustSkin-RightDiscussionColumn\"></div>").appendTo(discussionElements[i]);

    var leftCol = discussionElements[i].getElementsByClassName('CustSkin-LeftDiscussionColumn')[0];
    var rightCol = discussionElements[i].getElementsByClassName('CustSkin-RightDiscussionColumn')[0];

    $(photo).appendTo(leftCol);
    $(options).appendTo(rightCol);

    $("<div class=\"ItemContent Discussion\"><\div>").appendTo(leftCol);
    $("<div class=\"ItemContent Discussion\"><\div>").appendTo(rightCol);

    var leftDiscussionDiv = leftCol.getElementsByClassName('ItemContent Discussion')[0];
    var rightDiscussionDiv = rightCol.getElementsByClassName('ItemContent Discussion')[0];

    $(title).appendTo(leftDiscussionDiv);

    $("<div class=\"Meta Meta-Discussion\"><\div>").appendTo(leftDiscussionDiv);
    $("<div class=\"Meta Meta-Discussion\"><\div>").appendTo(rightDiscussionDiv);

    var leftMetaDiv = leftDiscussionDiv.getElementsByClassName('Meta Meta-Discussion')[0];
    var rightMetaDiv = rightDiscussionDiv.getElementsByClassName('Meta Meta-Discussion')[0];

    $(answeredTag).appendTo(leftMetaDiv);
    $(answerTag).appendTo(leftMetaDiv);
    $(questionTag).appendTo(leftMetaDiv);
    $(announcementTag).appendTo(leftMetaDiv);
    $(closedTag).appendTo(leftMetaDiv);
    $(author).appendTo(leftMetaDiv);
    $(viewCount).appendTo(leftMetaDiv);
    $(commentCount).appendTo(leftMetaDiv);
    $(discussionScore).appendTo(leftMetaDiv);
    $(lastComment).appendTo(rightMetaDiv);
    $(lastCommentDate).appendTo(rightMetaDiv);
}
