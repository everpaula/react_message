import { format, formatDistanceToNow } from 'date-fns';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps{
    post: PostType
}

export function Post({ post }: PostProps) {
    const [comments, setComments] = useState([
        'Very nice post, keep it up!!'
    ])

    const [newCommentText, setNewCommentText] = useState('')



    const publishedDateFormatted = format(post.publishedAt, " do LLLL 'at' HH:mm'h'")
    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        addSuffix: true,
    })

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value);
    }


    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('This field is required!')
    }

    function deleteComment(commentToDelete: string){
        const commentWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length == 0


    return (
        <article className={styles.post}>
 
 { /* Header :) */ }
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            
{ /* Post Content :) */ }
            <div className={styles.content}>
                {post.content.map(line => {
                    if (line.type == 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type == 'link') {
                        return <p key={line.content}><a href='#'>{line.content}</a></p>;
                    }
                })}
            </div>

{ /* Post Comments :) */ }
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Drop your feedback</strong>

                <textarea
                    name="comment"
                    placeholder='Drop your comment'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>
                        Publish
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>

        </article>
    )
}