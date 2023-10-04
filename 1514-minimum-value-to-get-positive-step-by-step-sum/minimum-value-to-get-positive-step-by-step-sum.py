class Solution:
    def minStartValue(self, nums: List[int]) -> int:
        if not any(i<0 for i in nums):
          return 1
        sum_value = 0
        min_sum = 0
        for num in nums:
          sum_value += num
          min_sum = min(min_sum, sum_value)
        return min_sum * -1 + 1

