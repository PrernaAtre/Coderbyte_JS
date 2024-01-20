function CountingMinutes(str)
{
    let [startTime, endTime] = str.split('-');
    let start_minute = getMinutes(startTime);
    let end_minute = getMinutes(endTime);
    //console.log(start_minute);
   // console.log(end_minute);
    const timeDiff = (end_minute - start_minute + 1440) % 1440;
    return timeDiff;
    //console.log([startTime, endTime]);

}
function getMinutes(time)
{
    const [hourStr, minuteStr] = time.slice(0,-2).split(':');
    console.log([hourStr, minuteStr]);
    const hour = parseInt(hourStr);
    const minute = parseInt(minuteStr);
    const isPm = time.slice(-2) === 'pm';
    const totalMinute = hour * 60 + minute;
    return isPm? totalMinute + 720 : totalMinute;
}
console.log(CountingMinutes("12:30pm-12:00am"));