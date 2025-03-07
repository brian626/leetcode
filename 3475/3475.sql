select s.sample_id,
    dna_sequence,
    species,
    coalesce(has_start, 0) as has_start,
    coalesce(has_stop, 0) as has_stop,
    coalesce(has_atat, 0) as has_atat,
    coalesce(has_ggg, 0) as has_ggg
from Samples s
left join(
        select sample_id, 1 as has_start
        from Samples
        where dna_sequence like 'ATG%'
    ) s_start on s.sample_id = s_start.sample_id
left join(
        select sample_id, 1 as has_stop
        from Samples
        where dna_sequence like '%TAA'
        or dna_sequence like '%TAG'
        or dna_sequence like '%TGA'
    ) s_stop on s.sample_id = s_stop.sample_id
left join(
        select sample_id, 1 as has_atat
        from Samples
        where dna_sequence like '%ATAT%'
    ) s_atat on s.sample_id = s_atat.sample_id
left join(
        select sample_id, 1 as has_ggg
        from Samples
        where dna_sequence like '%GGG%'
    ) s_ggg on s.sample_id = s_ggg.sample_id;
