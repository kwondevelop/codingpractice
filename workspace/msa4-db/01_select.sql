-- SELECT 문
-- DML 중 하나로, 저장되어 있는 데이터를
-- 조회하기 위해 사용하는 쿼리

-- 조회한 데이터 중 특정 컬럼만 출력
-- SELECT 
-- 	`name`
-- 	, gender
-- 	, emp_id
-- FROM employees;

-- 테이블 전체 컬럼 조회 : *(Asterisk)
-- SELECT *
-- FROM employees;

-- WHERE 절 : 특정 컬럼의 값이 일치한 데이터만 조회
-- SELECT *
-- FROM employees
-- WHERE emp_id = 10009;
-- 
-- SELECT *
-- FROM employees
-- WHERE `name` = '권민재';
-- 
-- SELECT *
-- FROM employees
-- WHERE birth >= '1990-01-01';

-- SELECT *
-- FROM employees
-- WHERE fire_at IS NULL;

-- SELECT *
-- FROM employees
-- WHERE fire_at IS NOT NULL;
