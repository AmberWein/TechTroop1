def min_days_to_complete_game(tasks, max_diff):
    if not tasks:
        return 0

    # מיון המשימות מהקל לקשה
    sorted_tasks = sorted(tasks)
    days = 1
    min_task = sorted_tasks[0]  # המשימה הקלה ביותר ביום הנוכחי

    for difficulty in sorted_tasks[1:]:
        if difficulty - min_task > max_diff:
            # מתחילים יום חדש
            days += 1
            min_task = difficulty  # המשימה החדשה היא הקלה ביותר ביום החדש

    return days

