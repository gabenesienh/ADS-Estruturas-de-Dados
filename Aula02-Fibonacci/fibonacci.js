function fibAte(limite, nums = [0, 1]) {
  if (nums.length === limite) {
    return nums;
  }

  return fibAte(limite, nums.concat(nums.at(-1) + nums.at(-2)));
}

console.log(fibAte(5977));
