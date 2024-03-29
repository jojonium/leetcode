-- https://leetcode.com/problems/two-sum/

-- Given an array of integers, return indices of the two numbers such that they
-- add up to a specific target.
-- You may assume that each input would have exactly one solution, and you may
-- not use the same element twice.
twoSum :: [Int] -> Int -> (Int, Int)
twoSum nums target = head [(i, j) | i <- nums, j <- nums, i + j == target]
