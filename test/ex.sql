-- ✅ 사용자 (관리자 + 일반 사용자)
INSERT INTO users (name, username, password, is_admin) VALUES
('관리자', 'admin', '$2b$10$XkO1eA5Z88YDnHdRTzVN..CqsayGbHjea5p7WvFVU5ESz1yMfQx1K', TRUE),
('홍길동', 'hong', '$2b$10$DnWxR3OHOY1UBCikzHTFwO5EYgfPz/vBLH3jBwrQjtpypv7hZZ60i', FALSE);

-- ✅ 카테고리
INSERT INTO categories (name, `order`) VALUES
('자유게시판', 1),
('질문답변', 2),
('공지사항', 3);

-- ✅ 게시글 (author_id = 2 → 'hong')
INSERT INTO posts (category, title, content, author, author_id, likes) VALUES
('자유게시판', '첫 번째 글입니다!', '안녕하세요. 테스트 게시글입니다.', 'hong', 2, 3),
('질문답변', 'React useEffect 질문있습니다', '무한루프 도는 이유가 뭘까요?', 'hong', 2, 5),
('공지사항', 'MyBoard가 오픈되었습니다 🎉', '이제 자유롭게 글을 작성해보세요.', 'hong', 2, 10);

-- ✅ 댓글
INSERT INTO comments (post_id, author, author_id, content) VALUES
(1, 'hong', 2, '댓글도 테스트해봅니다.'),
(2, 'hong', 2, '답변 기다리고 있어요!');
