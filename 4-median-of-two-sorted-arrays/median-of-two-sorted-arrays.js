/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    const nums3 = nums2;
    nums2 = nums1;
    nums1 = nums3;
  }

  const totalLength = nums1.length + nums2.length;
  const half = Math.floor((totalLength + 1) / 2);

  let l = 0;
  let r = nums1.length;

  while (l <= r) {
    const i = Math.floor((l + r) / 2);
    const j = half - i;

    const nums1L = i > 0 ? nums1[i - 1] : Number.MIN_SAFE_INTEGER;
    const nums1R = i < nums1.length ? nums1[i] : Number.MAX_SAFE_INTEGER;
    const nums2L = j > 0 ? nums2[j - 1] : Number.MIN_SAFE_INTEGER;
    const nums2R = j < nums2.length ? nums2[j] : Number.MAX_SAFE_INTEGER;

    if (nums1L <= nums2R && nums2L <= nums1R) {
      if (totalLength % 2 === 0) {
        return (Math.max(nums1L, nums2L) + Math.min(nums1R, nums2R)) / 2;
      } else {
        return Math.max(nums1L, nums2L);
      }
    } else if (nums1L > nums2R) {
      r = i - 1;
    } else {
      l = i + 1;
    }
  }
};