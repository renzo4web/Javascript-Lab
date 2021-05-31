export function Comment(comment) {
    const hasNestedComments = comment.comments.length > 0;

    const {content, user, time_ago, comments ,level} = comment;


    return `<div class="nested-comments-${level}">
                      <p class="comment-header">
                        ${user} | ${time_ago}
                      </p>
                      ${content}
                      ${hasNestedComments ? comments.map(Comment).join('') : ''}
                </div>`;

}