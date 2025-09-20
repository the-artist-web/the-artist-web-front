'use strict';

export const Tooltip = (tooltipTriggerList) => 
{
  tooltipTriggerList.map((tooltipTriggerEl) => {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
}